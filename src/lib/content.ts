export type ProjectCategory = 'web' | 'app';

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  role: string;
  category: ProjectCategory;
  images?: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  note?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const CONTACT = {
  whatsapp: '6289629656884',
  email: 'terasoftware10@gmail.com',
  whatsappLink: 'https://wa.me/6289629656884?text=Halo, saya tertarik untuk berdiskusi tentang project.',
};

export const PROJECTS: Project[] = [
  // Web Projects
  {
    id: "web-lydia",
    title: "Lydia Zumba",
    description:
      "Website personal untuk instruktur Zumba dan senam aerobik, menampilkan profil, jadwal kelas, dan kontak.",
    stack: ["NextJs", "Tailwind"],
    role: "Full Development",
    category: "web",
    images: ["/portfolio/Desktop_-_6.png"],
  },
  {
    id: "web-javanice",
    title: "PT Javanice Indonesia",
    description:
      "Website company profile untuk perusahaan, menampilkan profil bisnis, layanan, dan informasi kontak profesional.",
    stack: ["NextJs", "Tailwind"],
    role: "Full Development",
    category: "web",
    images: ["/portfolio/Screenshot_2025-06-28_143115.png"],
  },
  {
    id: "web-yadika",
    title: "SMA Yadika",
    description:
      "Website resmi sekolah SMA Yadika, memuat informasi akademik, kegiatan, dan penerimaan siswa baru.",
    stack: ["NextJs", "Tailwind"],
    role: "Full Development",
    category: "web",
    images: ["/portfolio/Screenshot 2026-06-10 223826.png"],
  },
  // App Projects
  {
    id: "app-dcm",
    title: "DCM App",
    description:
      "Aplikasi diagnosis level diabetes — pengguna dapat mencatat riwayat medis, memantau indikator risiko, dan mendapat panduan diet harian.",
    stack: ["Flutter", "Firebase"],
    role: "Full Development",
    category: "app",
    images: [
      "/portfolio/Screenshot_2025-04-07_211641.png",
      "/portfolio/Screenshot_2025-04-07_211806.png",
      "/portfolio/Screenshot_2025-04-07_211833.png",
    ],
  },
  {
    id: "app-bookstore",
    title: "Book Store",
    description:
      "Aplikasi untuk membeli buku secara online, lengkap dengan catalog, keranjang belanja, dan proses checkout.",
    stack: ["Flutter", "REST API"],
    role: "Full Development",
    category: "app",
    images: [
      "/portfolio/Screenshot_2025-06-29_141754.png",
      "/portfolio/Screenshot_2025-06-29_141943.png",
    ],
  },
  {
    id: "app-posyandu",
    title: "Posyandu App",
    description:
      "Aplikasi pencatatan kesehatan remaja bulanan — petugas mencatat data, remaja dapat memantau tren kesehatan mereka setiap bulan.",
    stack: ["Flutter", "Supabase"],
    role: "Full Development",
    category: "app",
    images: ["/portfolio/Screenshot_2025-04-07_205048.png"],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'website',
    title: 'Website Company Profile',
    price: 'Rp 1.500.000',
    description: 'Website profesional untuk bisnis Anda, sudah termasuk domain.',
    features: [
      'Desain responsif (desktop & mobile)',
      'Domain .com (1 tahun)',
      'Hingga 5 halaman standar',
      'Free maintenance 1 bulan',
      'Integrasi WhatsApp',
    ],
    note: 'Tambah halaman setelah deploy = biaya tambahan',
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    price: 'Rp 500.000 – Rp 1.000.000',
    description: 'Desain UI yang modern dan fokus pada user experience.',
    features: [
      'Desain di Figma',
      'Revamp: Rp 500.000',
      'From scratch: Rp 1.000.000',
      'Maksimal 3x revisi setelah desain di-fix',
      'Export assets siap development',
    ],
  },
  {
    id: 'android-app',
    title: 'Aplikasi Android',
    price: 'Sesuai Fitur',
    description: 'Aplikasi Android custom sesuai kebutuhan bisnis Anda.',
    features: [
      'Menggunakan Flutter',
      'Rencana biaya detail di awal',
      'Desain UI + Development',
      'Dokumentasi teknis',
      'Support deployment ke Play Store',
    ],
    note: 'Tambah fitur di tengah development = biaya tambahan',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    title: 'Diskusi',
    description: 'Ceritakan kebutuhan dan ide project Anda via WhatsApp atau meeting.',
  },
  {
    id: 'step-2',
    title: 'Penawaran & Scope',
    description: 'Saya kirimkan penawaran harga dan detail scope pekerjaan.',
  },
  {
    id: 'step-3',
    title: 'Pengerjaan',
    description: 'Proses development dengan update progress berkala.',
  },
  {
    id: 'step-4',
    title: 'Serah Terima',
    description: 'Final review, revisi (jika ada), dan serah terima source code.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Bagaimana kebijakan revisi?',
    answer: 'Website: revisi minor selama periode maintenance. UI Design: maksimal 3x revisi setelah desain di-fix. Aplikasi: sesuai kesepakatan di scope awal.',
  },
  {
    id: 'faq-2',
    question: 'Berapa lama maintenance gratis?',
    answer: 'Website company profile mendapat free maintenance 1 bulan setelah serah terima. Maintenance mencakup bug fix dan update minor.',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana jika ingin menambah fitur/halaman?',
    answer: 'Penambahan fitur atau halaman di luar scope awal akan dikenakan biaya tambahan. Harga akan dikomunikasikan sebelum pengerjaan.',
  },
  {
    id: 'faq-4',
    question: 'Metode pembayaran seperti apa?',
    answer: 'Pembayaran via transfer bank. Biasanya 50% di awal, 50% setelah serah terima. Bisa dinegosiasikan sesuai project.',
  },
  {
    id: 'faq-5',
    question: 'Berapa estimasi waktu pengerjaan?',
    answer: 'Website: 1–2 minggu. UI Design: 3–7 hari. Aplikasi: sesuai kompleksitas fitur, estimasi akan dijelaskan di penawaran.',
  },
];
