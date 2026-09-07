/* =========================================================================
   Portfolio — Federico
   JavaScript minimo: data nel cartiglio, toggle prima/dopo di SnapMark ed
   evidenziazione della sezione attiva nella barra di navigazione.
   Nessuna dipendenza.
   ========================================================================= */

(function () {
    "use strict";

    /* ---- data corrente nel cartiglio -------------------------------- */
    var dateCell = document.getElementById("tb-date");
    if (dateCell) {
        var now = new Date();
        var mm = String(now.getMonth() + 1).padStart(2, "0");
        dateCell.textContent = mm + "." + now.getFullYear();
    }

    /* ---- toggle prima/dopo (SnapMark) ------------------------------ */
    var baToggle = document.getElementById("ba-toggle");
    if (baToggle) {
        var figure = baToggle.closest(".ba");
        var imgs = baToggle.querySelectorAll(".ba__img"); // [0] prima, [1] dopo
        var label = baToggle.querySelector(".ba__label");
        var hint = baToggle.querySelector(".ba__hint");
        var showingDopo = false;

        baToggle.addEventListener("click", function () {
            showingDopo = !showingDopo;
            imgs[0].hidden = showingDopo;
            imgs[1].hidden = !showingDopo;
            if (figure) { figure.classList.toggle("is-dopo", showingDopo); }
            baToggle.setAttribute("aria-pressed", String(showingDopo));
            baToggle.setAttribute(
                "aria-label",
                showingDopo ? "Mostra il disegno prima della marcatura"
                            : "Mostra il disegno dopo la marcatura"
            );
            if (label) {
                label.textContent = showingDopo ? "DOPO" : "PRIMA";
            }
            if (hint) {
                hint.textContent = showingDopo
                    ? "clicca l'immagine per tornare al prima"
                    : "clicca l'immagine per vedere il dopo";
            }
        });
    }

    /* ---- scroll-spy sulla navigazione ----------------------------- */
    var navLinks = Array.prototype.slice.call(
        document.querySelectorAll(".topbar__nav a")
    );
    if (!navLinks.length || !("IntersectionObserver" in window)) {
        return;
    }

    var byId = {};
    var sections = [];
    navLinks.forEach(function (link) {
        var id = link.getAttribute("href").slice(1);
        var section = document.getElementById(id);
        if (section) {
            byId[id] = link;
            sections.push(section);
        }
    });

    var visible = new Set();

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    visible.add(entry.target.id);
                } else {
                    visible.delete(entry.target.id);
                }
            });

            // la prima sezione visibile in ordine di documento vince
            var activeId = null;
            for (var i = 0; i < sections.length; i++) {
                if (visible.has(sections[i].id)) {
                    activeId = sections[i].id;
                    break;
                }
            }

            navLinks.forEach(function (link) {
                link.classList.remove("is-active");
            });
            if (activeId && byId[activeId]) {
                byId[activeId].classList.add("is-active");
            }
        },
        { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });
})();
