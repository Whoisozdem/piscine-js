export function compose() {
    function create(event) {
        const div = document.createElement('div');
        div.className = 'note';
        document.body.appendChild(div);
        div.innerHTML = event.key;
        div.style.backgroundColor = `rgb(32,156,${event.keyCode})`;
    }

    function deletelast() {
        const notes = document.querySelectorAll('.note');
        const lastNote = notes[notes.length - 1];
        if (lastNote) {
            lastNote.remove();
        }
    }

    function clearAllNotes() {
        const notes = document.querySelectorAll('.note');
        notes.forEach(function (note) {
            note.remove();
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Backspace') {
            deletelast();
        } else if (event.key === 'Escape') {
            clearAllNotes();
        } else if (/^[a-z]$/.test(event.key)) {
            create(event);
        }
    });
}
