import type { ElementType } from "react";
import { Layers3, Smartphone } from "lucide-react";

export type Service = {
  number: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  icon: ElementType;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };

  overview: {
    title: string;
    description: string;
  };

  introduction: {
    title: string;
    paragraphs: string[];
  };

  problems: {
    title: string;
    description: string;
  }[];

  solutions: {
    title: string;
    description: string;
  }[];

  featuresDetail: {
    title: string;
    description: string;
  }[];

  benefits: {
    title: string;
    description: string;
  }[];

  process: {
    number: string;
    title: string;
    description: string;
  }[];

  technologies: string[];

  idealFor: string[];

  faq: {
    question: string;
    answer: string;
  }[];

  cta: {
    title: string;
    description: string;
    button: string;
  };
};

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Website Development",
    slug: "jasa-pembuatan-website-umkm",

    description:
      "A professional website built around your business goals, customers, and long-term growth.",

    features: [
      "Business-focused structure",
      "Responsive experience",
      "SEO-ready architecture",
    ],

    icon: Layers3,

    seo: {
      title: "Jasa Pembuatan Website UMKM Profesional | Website Development",
      description:
        "Jasa pembuatan website UMKM yang profesional, responsive, dan SEO friendly. Bantu bisnis Anda tampil lebih kredibel dan mudah ditemukan secara online.",
      keywords: [
        "jasa pembuatan website umkm",
        "jasa pembuatan website bisnis",
        "website profesional",
        "jasa website perusahaan",
        "website responsive",
      ],
    },

    hero: {
      eyebrow: "Website Development",
      title: "Jasa Pembuatan Website UMKM yang Profesional dan Siap Berkembang",
      description:
        "Kami membantu UMKM membangun website profesional yang tidak hanya terlihat menarik, tetapi juga dirancang untuk meningkatkan kredibilitas, menjangkau pelanggan baru, dan mendukung pertumbuhan bisnis.",
    },

    overview: {
      title: "Website yang dibangun untuk kebutuhan bisnis Anda",
      description:
        "Website bisnis bukan sekadar halaman online. Website harus mampu menjelaskan bisnis dengan jelas, membangun kepercayaan pelanggan, dan memberikan pengalaman yang mudah digunakan di berbagai perangkat.",
    },

    introduction: {
      title: "Kenapa UMKM Membutuhkan Website Profesional",
      paragraphs: [
        "Di era digital, pelanggan sering mencari informasi bisnis secara online sebelum memutuskan untuk membeli atau menghubungi. Tanpa website, UMKM berisiko kehilangan calon pelanggan yang mencari referensi lebih lanjut.",
        "Website yang dirancang dengan baik dapat menjadi representasi digital bisnis Anda, menampilkan produk atau layanan, serta membangun kepercayaan sejak kunjungan pertama.",
      ],
    },

    problems: [
      {
        title: "Belum Memiliki Kehadiran Digital",
        description:
          "Banyak UMKM masih mengandalkan media sosial saja, sehingga sulit terlihat profesional dan kredibel di mata calon pelanggan baru.",
      },
      {
        title: "Website Lama Sulit Digunakan",
        description:
          "Website yang tidak responsive atau memiliki struktur membingungkan membuat pengunjung cepat meninggalkan halaman.",
      },
      {
        title: "Tidak Muncul di Pencarian Google",
        description:
          "Website tanpa dasar SEO yang baik sulit ditemukan oleh calon pelanggan yang mencari produk atau layanan sejenis.",
      },
    ],

    solutions: [
      {
        title: "Website yang Dibangun dari Kebutuhan Bisnis",
        description:
          "Kami memulai dengan memahami target pelanggan dan tujuan bisnis, agar struktur website benar-benar relevan.",
      },
      {
        title: "Desain Responsive di Semua Perangkat",
        description:
          "Website dioptimalkan agar tetap nyaman digunakan baik di desktop, tablet, maupun smartphone.",
      },
      {
        title: "Fondasi SEO Sejak Awal Pengembangan",
        description:
          "Struktur, metadata, dan performa website disiapkan agar lebih mudah ditemukan di mesin pencari.",
      },
    ],

    featuresDetail: [
      {
        title: "Struktur Halaman yang Jelas",
        description:
          "Navigasi dan informasi disusun agar pengunjung mudah memahami bisnis dan menemukan yang mereka cari.",
      },
      {
        title: "Performa Cepat",
        description:
          "Website dioptimalkan agar loading lebih cepat, meningkatkan pengalaman pengguna dan SEO.",
      },
      {
        title: "Siap Dikembangkan",
        description:
          "Struktur teknis dirancang agar mudah ditambah fitur baru seiring pertumbuhan bisnis.",
      },
    ],

    benefits: [
      {
        title: "Meningkatkan Kredibilitas",
        description:
          "Website profesional membantu bisnis terlihat lebih terpercaya di mata calon pelanggan.",
      },
      {
        title: "Mendukung Pemasaran",
        description:
          "Website dapat menjadi pusat informasi bisnis dan mendukung aktivitas digital marketing.",
      },
      {
        title: "SEO Ready",
        description:
          "Struktur website dirancang dengan mempertimbangkan kebutuhan SEO sejak awal pengembangan.",
      },
      {
        title: "Responsive",
        description:
          "Website dapat digunakan dengan nyaman melalui desktop, tablet, maupun smartphone.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Discovery",
        description:
          "Memahami bisnis, target audience, kebutuhan, dan tujuan website.",
      },
      {
        number: "02",
        title: "Structure",
        description:
          "Menyusun struktur halaman dan informasi agar mudah dipahami pengguna.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "Membuat tampilan visual yang sesuai dengan karakter dan positioning bisnis.",
      },
      {
        number: "04",
        title: "Development",
        description:
          "Mengembangkan website dengan teknologi modern dan responsive.",
      },
      {
        number: "05",
        title: "Launch",
        description: "Melakukan testing, optimasi, dan deployment website.",
      },
    ],

    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],

    idealFor: [
      "UMKM yang ingin memiliki kehadiran digital profesional",
      "Bisnis yang membutuhkan company profile online",
      "Usaha yang ingin meningkatkan kredibilitas di mata pelanggan",
    ],

    faq: [
      {
        question: "Apakah website bisa digunakan untuk UMKM?",
        answer:
          "Ya. Website dapat disesuaikan dengan kebutuhan UMKM, mulai dari company profile, katalog produk, hingga website dengan fitur yang lebih kompleks.",
      },
      {
        question: "Apakah website sudah responsive?",
        answer:
          "Ya. Website dirancang agar dapat digunakan dengan baik pada desktop, tablet, dan smartphone.",
      },
      {
        question: "Apakah website SEO friendly?",
        answer:
          "Kami membangun struktur website dengan memperhatikan aspek teknis SEO seperti struktur halaman, metadata, semantic HTML, performa, dan responsive experience.",
      },
    ],

    cta: {
      title: "Siap Membangun Website Profesional untuk Bisnis Anda?",
      description:
        "Mari diskusikan kebutuhan website Anda dan mulai membangun kehadiran digital yang lebih kredibel.",
      button: "Konsultasi Sekarang",
    },
  },

  {
    number: "02",
    title: "UI/UX Design",
    slug: "jasa-design-website",

    description:
      "Clear and intuitive digital experiences that help people understand your business and take action.",

    features: [
      "Clear information architecture",
      "Intuitive user journeys",
      "Premium visual design",
    ],

    icon: Smartphone,

    seo: {
      title: "Jasa Design UI/UX Website & Aplikasi Profesional",
      description:
        "Jasa design UI/UX yang fokus pada pengalaman pengguna, membantu produk digital Anda lebih mudah digunakan dan meningkatkan konversi.",
      keywords: [
        "jasa design website",
        "jasa ui ux design",
        "desain aplikasi",
        "user experience design",
        "user interface design",
      ],
    },

    hero: {
      eyebrow: "UI/UX Design",
      title: "Desain UI/UX yang Membuat Produk Digital Lebih Mudah Digunakan",
      description:
        "Kami merancang pengalaman digital yang jelas, intuitif, dan memiliki visual yang profesional agar pengguna dapat memahami produk dan menyelesaikan tujuan mereka dengan lebih mudah.",
    },

    overview: {
      title: "Design yang berangkat dari kebutuhan pengguna",
      description:
        "Kami menggabungkan kebutuhan bisnis dengan kebutuhan pengguna untuk menghasilkan interface yang tidak hanya terlihat bagus tetapi juga memiliki pengalaman penggunaan yang jelas.",
    },

    introduction: {
      title: "Kenapa UI/UX Design Penting untuk Produk Digital",
      paragraphs: [
        "Design yang buruk membuat pengguna kesulitan memahami cara menggunakan produk, sehingga berpotensi meningkatkan bounce rate dan menurunkan konversi.",
        "Dengan pendekatan user-centered design, produk digital dapat dirancang agar lebih intuitif, konsisten, dan selaras dengan tujuan bisnis maupun kebutuhan pengguna.",
      ],
    },

    problems: [
      {
        title: "Alur Pengguna yang Membingungkan",
        description:
          "Pengguna kesulitan menemukan informasi atau menyelesaikan tugas karena alur interface yang tidak jelas.",
      },
      {
        title: "Tampilan Tidak Konsisten",
        description:
          "Tanpa design system, tampilan antar halaman sering terlihat tidak seragam dan kurang profesional.",
      },
      {
        title: "Sulit Divalidasi Sebelum Development",
        description:
          "Tanpa prototype, ide desain sulit diuji dan berpotensi menimbulkan revisi besar saat sudah masuk development.",
      },
    ],

    solutions: [
      {
        title: "Riset Pengguna dan Bisnis",
        description:
          "Kami memulai dengan memahami target pengguna, kompetitor, dan tujuan bisnis sebelum masuk ke tahap desain.",
      },
      {
        title: "Design System yang Konsisten",
        description:
          "Komponen visual disusun secara sistematis agar tampilan tetap konsisten di seluruh produk.",
      },
      {
        title: "Prototype Interaktif",
        description:
          "Prototype dibuat untuk mensimulasikan pengalaman pengguna sebelum masuk ke tahap development.",
      },
    ],

    featuresDetail: [
      {
        title: "Wireframe Terstruktur",
        description:
          "Struktur halaman disusun terlebih dahulu agar alur informasi jelas sebelum masuk ke visual design.",
      },
      {
        title: "Visual Design Modern",
        description:
          "Tampilan interface dirancang agar sesuai dengan karakter brand dan kebutuhan target pengguna.",
      },
      {
        title: "Prototype Siap Handoff",
        description:
          "Prototype disiapkan agar mudah dipahami dan diimplementasikan oleh tim development.",
      },
    ],

    benefits: [
      {
        title: "User-Centered Design",
        description:
          "Desain dibuat berdasarkan kebutuhan, perilaku, dan tujuan pengguna.",
      },
      {
        title: "Clear User Journey",
        description:
          "Setiap alur dirancang agar pengguna dapat memahami langkah berikutnya dengan mudah.",
      },
      {
        title: "Consistent Interface",
        description:
          "Design system membantu menjaga konsistensi visual di seluruh produk.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Research",
        description:
          "Memahami bisnis, pengguna, kompetitor, dan kebutuhan produk.",
      },
      {
        number: "02",
        title: "Wireframe",
        description:
          "Menyusun struktur dan alur halaman sebelum masuk ke visual design.",
      },
      {
        number: "03",
        title: "UI Design",
        description:
          "Membuat visual interface yang modern dan sesuai dengan brand.",
      },
      {
        number: "04",
        title: "Prototype",
        description:
          "Membuat prototype interaktif untuk mensimulasikan pengalaman pengguna.",
      },
    ],

    technologies: ["Figma", "Adobe XD", "Design Systems"],

    idealFor: [
      "Startup yang membutuhkan validasi desain produk",
      "Bisnis yang ingin merevitalisasi tampilan produk digital",
      "Tim product yang membutuhkan design system yang konsisten",
    ],

    faq: [
      {
        question: "Apakah hanya menerima desain website?",
        answer:
          "Tidak. UI/UX design dapat digunakan untuk website, mobile application, maupun digital product lainnya.",
      },
      {
        question: "Apakah prototype interaktif termasuk?",
        answer:
          "Ya. Prototype interaktif dapat dibuat untuk membantu proses validasi dan handoff kepada developer.",
      },
    ],

    cta: {
      title: "Ingin Meningkatkan Pengalaman Pengguna Produk Anda?",
      description:
        "Mari diskusikan kebutuhan desain produk digital Anda bersama tim kami.",
      button: "Konsultasi Sekarang",
    },
  },

  {
    number: "03",
    title: "App Development",
    slug: "jasa-pembuatan-aplikasi-pos",

    description:
      "We build reliable digital applications that turn business ideas, workflows, and customer needs into useful products.",

    features: [
      "Custom digital products",
      "Mobile & web applications",
      "Scalable & maintainable systems",
    ],

    icon: Smartphone,

    seo: {
      title: "Jasa Pembuatan Aplikasi POS untuk Bisnis",
      description:
        "Jasa pembuatan aplikasi POS dan sistem custom yang disesuaikan dengan workflow bisnis Anda untuk mendukung operasional yang lebih efisien.",
      keywords: [
        "jasa pembuatan aplikasi pos",
        "jasa pembuatan aplikasi",
        "aplikasi kasir",
        "custom software development",
        "aplikasi bisnis",
      ],
    },

    hero: {
      eyebrow: "App Development",
      title: "Jasa Pembuatan Aplikasi POS untuk Mendukung Operasional Bisnis",
      description:
        "Kami membangun aplikasi yang disesuaikan dengan workflow bisnis, membantu mengurangi proses manual, dan memberikan sistem yang lebih terstruktur untuk operasional sehari-hari.",
    },

    overview: {
      title: "Aplikasi yang mengikuti workflow bisnis",
      description:
        "Setiap bisnis memiliki proses yang berbeda. Karena itu, aplikasi dikembangkan berdasarkan kebutuhan dan workflow aktual bisnis, bukan sekadar menggunakan template yang sama untuk semua perusahaan.",
    },

    introduction: {
      title: "Kenapa Bisnis Membutuhkan Aplikasi Custom",
      paragraphs: [
        "Proses manual seperti pencatatan transaksi menggunakan buku atau spreadsheet rentan terhadap kesalahan dan sulit dipantau seiring berkembangnya bisnis.",
        "Aplikasi yang dibangun sesuai workflow bisnis membantu operasional menjadi lebih terstruktur, efisien, dan mudah dipantau secara real-time.",
      ],
    },

    problems: [
      {
        title: "Proses Manual yang Rentan Kesalahan",
        description:
          "Pencatatan transaksi dan stok secara manual berisiko menimbulkan kesalahan data dan memakan waktu lebih lama.",
      },
      {
        title: "Sulit Memantau Operasional",
        description:
          "Tanpa sistem terpusat, pemilik bisnis kesulitan memantau penjualan, stok, dan laporan secara real-time.",
      },
      {
        title: "Sistem Template yang Tidak Sesuai Kebutuhan",
        description:
          "Aplikasi generik seringkali tidak dapat mengikuti workflow spesifik bisnis, sehingga tetap membutuhkan penyesuaian manual.",
      },
    ],

    solutions: [
      {
        title: "Analisis Workflow Bisnis",
        description:
          "Kami mempelajari proses bisnis yang sudah berjalan sebelum menentukan arsitektur sistem yang tepat.",
      },
      {
        title: "Pengembangan Sistem Custom",
        description:
          "Aplikasi dikembangkan sesuai kebutuhan spesifik, bukan menggunakan template generik.",
      },
      {
        title: "Sistem yang Dapat Dikembangkan",
        description:
          "Arsitektur dirancang agar mudah ditambahkan fitur baru seiring pertumbuhan bisnis.",
      },
    ],

    featuresDetail: [
      {
        title: "Manajemen Transaksi",
        description:
          "Mencatat dan mengelola transaksi penjualan secara terstruktur dan real-time.",
      },
      {
        title: "Manajemen Stok",
        description:
          "Memantau ketersediaan stok produk secara otomatis untuk menghindari kesalahan pencatatan.",
      },
      {
        title: "Laporan Bisnis",
        description:
          "Menyediakan laporan penjualan dan operasional untuk membantu pengambilan keputusan.",
      },
    ],

    benefits: [
      {
        title: "Custom Workflow",
        description:
          "Sistem dapat disesuaikan dengan proses bisnis yang sudah berjalan.",
      },
      {
        title: "Operational Efficiency",
        description:
          "Membantu mengurangi pekerjaan manual dan proses yang berulang.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Sistem dirancang agar dapat dikembangkan ketika kebutuhan bisnis bertambah.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Requirement",
        description: "Mengidentifikasi kebutuhan dan workflow bisnis.",
      },
      {
        number: "02",
        title: "Architecture",
        description:
          "Menentukan struktur sistem, database, API, dan teknologi.",
      },
      {
        number: "03",
        title: "Development",
        description:
          "Mengembangkan aplikasi berdasarkan requirement yang telah disepakati.",
      },
      {
        number: "04",
        title: "Testing",
        description:
          "Melakukan testing untuk memastikan sistem berjalan sesuai kebutuhan.",
      },
      {
        number: "05",
        title: "Deployment",
        description:
          "Melakukan deployment dan membantu proses implementasi sistem.",
      },
    ],

    technologies: ["React", "Node.js", "PostgreSQL", "React Native"],

    idealFor: [
      "Bisnis retail yang membutuhkan sistem kasir digital",
      "Usaha yang ingin mendigitalisasi operasional manual",
      "Perusahaan yang membutuhkan sistem custom sesuai workflow",
    ],

    faq: [
      {
        question: "Apakah aplikasi bisa dibuat sesuai kebutuhan bisnis?",
        answer:
          "Ya. Sistem dapat dikembangkan berdasarkan workflow dan kebutuhan spesifik bisnis.",
      },
      {
        question: "Apakah bisa membuat aplikasi mobile?",
        answer:
          "Ya. Kami dapat membantu pengembangan aplikasi mobile maupun web application sesuai kebutuhan produk.",
      },
    ],

    cta: {
      title: "Butuh Aplikasi yang Sesuai dengan Workflow Bisnis Anda?",
      description:
        "Mari diskusikan kebutuhan sistem Anda dan bangun aplikasi yang benar-benar mendukung operasional bisnis.",
      button: "Konsultasi Sekarang",
    },
  },
];
