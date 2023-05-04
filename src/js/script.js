function toggleDropdown() {
    var dropdowncontent = document.getElementById("dropdown-content");
    if (dropdowncontent.style.maxHeight) {
        dropdowncontent.style.maxHeight = null;
    } else {
        dropdowncontent.style.maxHeight = dropdowncontent.scrollHeight + "px";
    }
}