const box = document.querySelectorAll(".box");
const item = document.querySelectorAll(".item");

// dragstart, dragend -> item

let dragElement;

for(let i=0; i < item.length; i++) {
    
    item[i].addEventListener("dragstart", (event) => {
        // console.log("dragstart", event.target);
        dragElement = event.target;
        dragElement.style.opacity = 0.3;

    });

    item[i].addEventListener("dragend", (event) => {
        // console.log("dragend");
        dragElement.style.opacity = 1;
        dragElement=null;
        
    });
}
// drop dragover, dragenter
for(let i=0; i<box.length; i++) {

    box[i].addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    box[i].addEventListener("dragenter", (event) => {
        event.preventDefault();
    });

    box[i].addEventListener("drop", () => {
        box[i].append(dragElement);
    });

}