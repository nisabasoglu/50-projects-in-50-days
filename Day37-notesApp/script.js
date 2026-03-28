const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem('notes')) // local storage a sadece string kaydedebildiğimiz için bu şekilde yazdık (çünkü bizimki array)
console.log(notes)
if(notes) {
    notes.forEach(note => addNewNote(note))
} // localStorage daki kayıtlı notları göstermiş olduk ekranda

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>`;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text; // textarea'nın içine text'i yazıyor
  main.innerHTML = marked.parse(text); // text`'i **Markdown'dan HTML'e** çeviriyor ve `main` div'ine yerleştiriyor.

  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS() //localStorage dan silmiş oluyorum bu sayede de
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden"); // class varsa kaldırır yoksa ekler
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked.parse(value);
    /* 
    Bu ikisi aynı şey
    const value = e.target.value
    const {value} = e.target  // kısaltma (destructuring)
    ```
    `e.target` → tıklanan element (textarea)
    `.value` → içindeki yazı

        */
    updateLS()
  });

  document.body.appendChild(note);
}

/* 
${text ? "hidden" : ""}
text doluysa (truthy) → "hidden" class'ı eklenir
text boşsa (falsy) → "" yani hiçbir şey eklenmez
---------------------------------------
document.querySelector('.edit')   // Tüm sayfada ara
note.querySelector('.edit')       // Sadece note div'inin içinde ara
*/

function updateLS() {
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}