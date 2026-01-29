document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const langButtons = document.querySelectorAll(".lang-toggle");
  const langSelect = document.getElementById("languageSelect");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  const langLabel = document.getElementById("langLabel");
  const navbarLangToggle = document.getElementById("navbarLangToggle");
  const navbarLangToggleMobile = document.getElementById("navbarLangToggleMobile");
  const registerButton = document.getElementById("registerButton");
  const header = document.getElementById("mainNav");
  const mobileMenu = document.getElementById("mobileMenu");

  const setMobileMenuPosition = () => {
    if (!mobileMenu || !header) return;
    const headerRect = header.getBoundingClientRect();
    const offset = Math.max(headerRect.bottom, header.offsetHeight, 0);
    mobileMenu.style.top = `${offset}px`;
    mobileMenu.style.maxHeight = `calc(100vh - ${offset}px)`;
  };

  window.addEventListener("load", setMobileMenuPosition);
  window.addEventListener("resize", setMobileMenuPosition);
  window.addEventListener("scroll", setMobileMenuPosition, { passive: true });
  setMobileMenuPosition();
  

  const langRoutes = {
    ID: "https://simaru.umb.ac.id/register",
    EN: "https://simaru.umb.ac.id/register_eng",
  };

  const translations = {
    ID: {
      "meta.title": "SIMARU - Sistem Penerimaan Siswa Baru",
      "announcement.text": "Pendaftaran Gelombang I Tahun Akademik 2026/2027 telah dibuka!",
      "brand.tagline": "Sistem Penerimaan Mahasiswa Baru",
      "nav.home": "Beranda",
      "nav.flow": "Alur Pendaftaran",
      "nav.faq": "FAQ",
      "nav.contact": "Kontak",
      "nav.site": "Situs UM Bengkulu",
      "nav.login": "Masuk",
      "cta.primary": "Daftar Sekarang",
      "hero.badge": "PMB 2026/2027 Telah Dibuka",
      "hero.title": "Selamat Datang Di <span class=\"text-primary\">SIMARU</span><br />Bersama UM Bengkulu",
      "hero.desc": "SIMARU UM Bengkulu, pintu gerbang menuju perjalanan pendidikan tinggi di Bumi Rafflesia! Simaru tidak hanya memudahkan pendaftaran, tetapi juga membawa Anda ke dunia pembelajaran yang menarik dan relevan.",
      "flow.badge": "Alur",
      "flow.heading": "Alur Pendaftaran",
      "flow.subheading": "Pelajari Alur Pendaftaran Mahasiswa Baru di Universitas Muhammadiyah Bengkulu.",
      "flow.step1.title": "PENDAFTARAN ONLINE",
      "flow.step1.desc": "Lakukan pendaftaran secara online atau datang langsung ke kantor PMB untuk mengisi formulir",
      "flow.step1.point1": "• Isi formulir pendaftaran",
      "flow.step1.point2": "• Lengkapi data diri Anda",
      "flow.step2.title": "PEMBAYARAN KEUANGAN",
      "flow.step2.desc": "Lakukan pembayaran biaya pendaftaran melalui transfer bank ke rekening resmi UM Bengkulu",
      "flow.step2.point1": "• Transfer ke rekening bank",
      "flow.step2.point2": "• Konfirmasi pembayaran",
      "flow.step3.title": "VERIFIKASI BERKAS",
      "flow.step3.desc": "Tim kami akan memverifikasi dokumen dan berkas pendaftaran Anda",
      "flow.step3.point1": "• Cek kelengkapan berkas",
      "flow.step3.point2": "• Verifikasi data diri",
      "flow.info.title": "ℹ️ Informasi:",
      "flow.info.body": "Semua proses tahapan pendaftaran dilaksanakan dalam satu gedung PMB kampus UM Bengkulu",
      "flow.info.cta": "Selengkapnya ",
      "faq.badge": "Pertanyaan & Jawaban",
      "faq.heading": "Pertanyaan yang Sering Diajukan",
      "faq.subheading": "Temukan jawaban atas pertanyaan umum seputar pendaftaran dan alur di SIMARU UM Bengkulu",
      "faq.q1": "Apa saja jalur pendaftaran yang tersedia?",
      "faq.a1.intro": "SIMARU UM Bengkulu menyediakan empat jalur pendaftaran:",
      "faq.a1.item1": "Jalur Reguler: Melalui One Day Service (pengisian formulir, seleksi, pengumuman, dan registrasi dalam satu hari) atau Daftar Online melalui website",
      "faq.a1.item2": "Jalur Undangan: Untuk calon mahasiswa yang mendapat undangan khusus",
      "faq.a1.item3": "Jalur Kelas Internasional: Untuk program kelas internasional",
      "faq.a1.item4": "Jalur RPL: Untuk calon mahasiswa dengan pengalaman kerja/prestasi profesional",
      "faq.q2": "Apa saja persyaratan pendaftaran?",
      "faq.a2.intro": "Persyaratan untuk mendaftar ulang:",
      "faq.a2.item1": "Menyerahkan Kartu Pendaftaran",
      "faq.a2.item2": "Fotocopy Ijazah SMA/SMK/MA dilegalisir (2 lembar)",
      "faq.a2.item3": "Surat Keterangan Lulus SMA/SMK/MA (bagi yang belum mendapatkan ijazah)",
      "faq.a2.item4": "Fotocopy Kartu Keluarga (1 lembar)",
      "faq.a2.item5": "Pas Foto Warna 3x4 (5 lembar)",
      "faq.q3": "Bagaimana dengan sistem pembayaran?",
      "faq.a3.intro": "Pembayaran dapat dilakukan melalui rekening bank berikut:",
      "faq.a3.item1": "Bank MEGA Syariah: 10000 1000 170958",
      "faq.a3.item2": "Bank Syari'ah Indonesia (BSI): 7014809931",
      "faq.a3.item3": "Bank Negara Indonesia (BNI46): 0772001759",
      "faq.a3.item4": "Bank Bengkulu: 00101106003694",
      "faq.a3.item5": "Bank Mandiri: 1790002703093",
      "faq.a3.item6": "Bank Muammalat: 4310049085",
      "faq.a3.note": "Pastikan mencantumkan nama dan nomor peserta saat melakukan transfer.",
      "faq.q4": "Kapan jadwal pendaftaran?",
      "faq.a4.intro": "Jadwal pendaftaran terbagi dalam 3 gelombang:",
      "faq.a4.item1": "Gelombang 1: Januari - April 2025",
      "faq.a4.item2": "Gelombang 2: Mei - Agustus 2025",
      "faq.a4.item3": "Gelombang 3: September - Oktober 2025",
      "faq.q5": "Di mana tempat pendaftaran?",
      "faq.a5.intro": "Pendaftaran dapat dilakukan di:",
      "faq.a5.item1": "Tempat: Gedung Penerimaan Mahasiswa Baru (PMB)",
      "faq.a5.item2": "Alamat: Kampus I Jalan Bali Kota Bengkulu",
      "faq.a5.item3": "Jam Kerja: Senin s/d Sabtu Jam 08.00-14.00 Wib",
      "faq.a5.item4": "Online: Daftar Online melalui website resmi UM Bengkulu",
      "faq.q6": "Apa itu One Day Service?",
      "faq.a6.intro": "One Day Service adalah layanan lengkap dalam satu hari yang meliputi:",
      "faq.a6.item1": "Pengisian Formulir Pendaftaran",
      "faq.a6.item2": "Seleksi/Ujian",
      "faq.a6.item3": "Pengumuman Hasil",
      "faq.a6.item4": "Registrasi (bagi yang diterima)",
      "faq.a6.note": "Layanan ini dirancang untuk kemudahan calon mahasiswa yang ingin menyelesaikan proses pendaftaran dengan cepat.",
      "footer.title": "SIMARU",
      "footer.desc": "Platform penerimaan mahasiswa baru terpadu untuk Universitas Muhammadiyah Bengkulu.",
      "footer.menu.title": "Menu Utama",
      "footer.academic.title": "Akademik",
      "footer.academic.item1": "• Fakultas Teknik",
      "footer.academic.item2": "• Fakultas Keguruan dan Ilmu Pendidikan",
      "footer.academic.item3": "• Fakultas Ilmu Kesehatan",
      "footer.academic.item4": "• Fakultas Ilmu Sosial dan Ilmu Politik",
      "footer.academic.item5": "• Fakultas Pertanian dan Peternakan",
      "footer.academic.item6": "• Fakultas Ekonomi Bisnis",
      "footer.academic.item7": "• Fakultas Agama Islam",
      "footer.academic.item8": "• Fakultas Hukum",
      "footer.academic.item9": "• Program Pascasarjana (S2)",
      "footer.contact.title": "Hubungi Kami",
      "footer.contact.addressLabel": "📍 Alamat",
      "footer.contact.addressValue": "Kampus I Jl. Bali, Kota Bengkulu",
      "footer.contact.emailLabel": "📧 Email",
      "footer.contact.hoursLabel": "🕐 Jam Kerja",
      "footer.contact.hoursValue": "Senin - Sabtu\n08:00 - 14:00 WIB",
      "footer.units.title": "Unit Universitas",
      "footer.units.item1": "• Kemahasiswaan",
      "footer.units.item2": "• LPPM",
      "footer.units.item3": "• LPMPP",
      "footer.units.item4": "• Perpustakaan",
      "footer.units.item5": "• UM Bengkulu",
      "footer.copyright": "© 2026 Universitas Muhammadiyah Bengkulu. Semua hak dilindungi.",
    },
    EN: {
      "meta.title": "SIMARU - New Student Admission System",
      "announcement.text": "Admission Wave I for Academic Year 2026/2027 is now open!",
      "brand.tagline": "New Student Admission System",
      "nav.home": "Home",
      "nav.flow": "Enrollment Flow",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.site": "UM Bengkulu Site",
      "nav.login": "Log In",
      "cta.primary": "Apply Now",
      "hero.badge": "Admissions 2026/2027 Are Open",
      "hero.title": "Welcome to <span class=\"text-primary\">SIMARU</span><br />with UM Bengkulu",
      "hero.desc": "SIMARU UM Bengkulu is your gateway to a transformative higher-education journey in the Land of Rafflesia. It not only simplifies registration but also ushers you toward engaging and relevant learning experiences.",
      "flow.badge": "Flow",
      "flow.heading": "Enrollment Flow",
      "flow.subheading": "Learn every step of the new student enrollment journey at Universitas Muhammadiyah Bengkulu.",
      "flow.step1.title": "ONLINE REGISTRATION",
      "flow.step1.desc": "Complete your registration online or visit the PMB office to fill out the application form",
      "flow.step1.point1": "• Fill out the registration form",
      "flow.step1.point2": "• Complete your personal information",
      "flow.step2.title": "PAYMENT",
      "flow.step2.desc": "Pay the registration fee via bank transfer to UM Bengkulu's official account",
      "flow.step2.point1": "• Transfer to the official bank account",
      "flow.step2.point2": "• Confirm your payment",
      "flow.step3.title": "DOCUMENT VERIFICATION",
      "flow.step3.desc": "Our team will verify your documents and application file",
      "flow.step3.point1": "• Check document completeness",
      "flow.step3.point2": "• Verify personal data",
      "flow.info.title": "ℹ️ Information:",
      "flow.info.body": "Every stage of the enrollment process takes place in the PMB building on the UM Bengkulu campus",
      "flow.info.cta": "Learn More",
      "faq.badge": "Questions & Answers",
      "faq.heading": "Frequently Asked Questions",
      "faq.subheading": "Find answers to the most common questions about the SIMARU registration process",
      "faq.q1": "Which admission tracks are available?",
      "faq.a1.intro": "SIMARU UM Bengkulu offers four admission tracks:",
      "faq.a1.item1": "Regular Track: Via One Day Service (form submission, selection, results, and registration in a single day) or Online Registration",
      "faq.a1.item2": "Invitation Track: For prospective students receiving special invitations",
      "faq.a1.item3": "International Class Track: For international class programs",
      "faq.a1.item4": "RPL Track: For applicants with professional experience or achievements",
      "faq.q2": "What are the registration requirements?",
      "faq.a2.intro": "Requirements for re-registration:",
      "faq.a2.item1": "Submit the Registration Card",
      "faq.a2.item2": "Provide two legalized copies of the high school diploma",
      "faq.a2.item3": "Include a graduation letter (for those who have not yet received the diploma)",
      "faq.a2.item4": "Attach one copy of the Family Card",
      "faq.a2.item5": "Prepare five 3x4 cm color photos",
      "faq.q3": "How does the payment system work?",
      "faq.a3.intro": "Payments can be made through the following bank accounts:",
      "faq.a3.item1": "Bank MEGA Syariah: 10000 1000 170958",
      "faq.a3.item2": "Bank Syari'ah Indonesia (BSI): 7014809931",
      "faq.a3.item3": "Bank Negara Indonesia (BNI46): 0772001759",
      "faq.a3.item4": "Bank Bengkulu: 00101106003694",
      "faq.a3.item5": "Bank Mandiri: 1790002703093",
      "faq.a3.item6": "Bank Muammalat: 4310049085",
      "faq.a3.note": "Always include your name and participant number when transferring funds",
      "faq.q4": "When is the registration schedule?",
      "faq.a4.intro": "Registration is divided into three waves:",
      "faq.a4.item1": "Wave 1: January – April 2025",
      "faq.a4.item2": "Wave 2: May – August 2025",
      "faq.a4.item3": "Wave 3: September – October 2025",
      "faq.q5": "Where does registration take place?",
      "faq.a5.intro": "You can register at:",
      "faq.a5.item1": "Location: New Student Admission (PMB) Building",
      "faq.a5.item2": "Address: Campus I, Jalan Bali, Bengkulu City",
      "faq.a5.item3": "Office Hours: Monday–Saturday, 08.00–14.00 WIB",
      "faq.a5.item4": "Online: Register through UM Bengkulu’s official website",
      "faq.q6": "What is the One Day Service?",
      "faq.a6.intro": "One Day Service is a full-day service that covers:",
      "faq.a6.item1": "Registration form submission",
      "faq.a6.item2": "Selection/exam",
      "faq.a6.item3": "Result announcement",
      "faq.a6.item4": "Registration (for accepted students)",
      "faq.a6.note": "This service is designed for prospective students who want to finalize the entire process in a single day",
      "footer.title": "SIMARU",
      "footer.desc": "Integrated new student admission platform for Universitas Muhammadiyah Bengkulu",
      "footer.menu.title": "Main Menu",
      "footer.academic.title": "Academics",
      "footer.academic.item1": "• Faculty of Engineering",
      "footer.academic.item2": "• Faculty of Teacher Training and Education",
      "footer.academic.item3": "• Faculty of Health Sciences",
      "footer.academic.item4": "• Faculty of Social and Political Sciences",
      "footer.academic.item5": "• Faculty of Agriculture and Animal Husbandry",
      "footer.academic.item6": "• Faculty of Economics and Business",
      "footer.academic.item7": "• Faculty of Islamic Studies",
      "footer.academic.item8": "• Faculty of Law",
      "footer.academic.item9": "• Graduate Program (S2)",
      "footer.contact.title": "Contact Us",
      "footer.contact.addressLabel": "📍 Address",
      "footer.contact.addressValue": "Campus I, Jalan Bali, Bengkulu City",
      "footer.contact.emailLabel": "📧 Email",
      "footer.contact.hoursLabel": "🕐 Office Hours",
      "footer.contact.hoursValue": "Monday–Saturday\n08:00–14:00 WIB",
      "footer.units.title": "University Units",
      "footer.units.item1": "• Student Affairs",
      "footer.units.item2": "• LPPM",
      "footer.units.item3": "• LPMPP",
      "footer.units.item4": "• Library",
      "footer.units.item5": "• UM Bengkulu",
      "footer.copyright": "© 2026 Universitas Muhammadiyah Bengkulu. All rights reserved.",
    },
  };

  let currentLang = localStorage.getItem("simaru-lang") || "ID";

  const applyTranslations = (lang) => {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.hasAttribute("data-i18n-html")) return;
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  };

  const updateLangIndicators = (lang) => {
    if (langLabel) langLabel.textContent = lang;
    [navbarLangToggle, navbarLangToggleMobile].forEach((btn) => {
      if (!btn) return;
      btn.setAttribute("aria-pressed", String(lang === "EN"));
      btn.classList.toggle("is-english", lang === "EN");
    });
  };

  const setLanguage = (lang) => {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("simaru-lang", lang);
    document.documentElement.lang = lang === "EN" ? "en" : "id";
    applyTranslations(lang);
    updateLangIndicators(lang);
  };

  window.setLang = (lang) => setLanguage(lang);

  const cycleLanguage = () => {
    const nextLang = currentLang === "ID" ? "EN" : "ID";
    setLanguage(nextLang);
  };

  [navbarLangToggle, navbarLangToggleMobile].forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", cycleLanguage);
    }
  });

  if (registerButton) {
    registerButton.addEventListener("click", () => {
      const targetUrl = langRoutes[currentLang] || langRoutes.ID;
      window.location.href = targetUrl;
    });
  }

  setLanguage(currentLang);

  // Mobile Menu Functionality
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      setMobileMenuPosition();
    });
  }

  // Close mobile menu when clicking on a link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (mobileMenuBtn && mobileMenu && !mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });

  const updateNavState = () => {
    if (!nav) return;
    const shouldStick = window.scrollY > 24;
    nav.classList.toggle("nav-scrolled", shouldStick);
  };

  // Intersection Observer for Section Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll(
    "[class*='section-animate']"
  );
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Get setLang for global access (for onclick handlers)
  window.setLang = (lang) => {
    setLanguage(lang);
  };

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.langToggle));
  });

  if (langSelect) {
    langSelect.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  }

  // Language dropdown toggle
  if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.add("hidden");
      }
    });
  }

  // FAQ Accordion functionality
  const faqToggles = document.querySelectorAll(".faq-toggle");
  faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const faqItem = toggle.closest(".faq-item");
      const faqContent = faqItem.querySelector(".faq-content");
      const isActive = faqItem.classList.contains("active");

      // Close all other FAQ items
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
          item.querySelector(".faq-content").style.display = "none";
        }
      });

      // Toggle current FAQ item
      if (isActive) {
        faqItem.classList.remove("active");
        faqContent.style.display = "none";
      } else {
        faqItem.classList.add("active");
        faqContent.style.display = "block";
      }
    });
  });

  window.addEventListener("scroll", updateNavState, { passive: true });
  updateNavState();
});



tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#11d473",
        "primary-dark": "#0ea85c",
        "accent-gold": "#f59e0b",
        "background-light": "#f6f8f7",
        "background-dark": "#102219",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
