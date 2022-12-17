const input = document.getElementById("file-input");
const preview = document.getElementsByClassName("file-preview")[0];
const drop = document.getElementsByClassName("drop-container")[0];

const makeImgPreview = (file) => {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  preview.append(img);
};

input.addEventListener("change", () => {
  for (const file of input.files) {
    makeImgPreview(file);
  }
});

drop.addEventListener("dragover", (e) => {
  e.preventDefault();
  drop.classList.add("over");
});

drop.addEventListener("dragleave", (e) => {
  e.preventDefault();
  drop.classList.remove("over");
});

drop.addEventListener("drop", (e) => {
  e.preventDefault();
  drop.classList.remove("over");
  const items = e.dataTransfer.items;
  if (items) {
    [...items].forEach((item) => {
      console.log(item);
      if (item.kind === "file") {
        const file = item.getAsFile();
        makeImgPreview(file);
      }
    });
  } else {
    [...ev.dataTransfer.files].forEach((file) => {
      makeImgPreview(file);
    });
  }
});

removeEventListener(drop);
