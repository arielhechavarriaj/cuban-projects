import { v4 as uuidv4 } from "uuid";

export interface ProjectscubanOpenSource {
  "name": string;
  "url": string;
  "description": string;
  id: string;
}
export interface category {
  category: string;
  "description": string;
  "name"?: string;
  icon?: string;
  id:string;

}
export interface Project {
  id: string;
  "name": string;
  "url": string;
  "description": string;
  category:category

}
export const ProjectscubanOpenSourceDATA: any[] = [
  {
    category: "homeworks",
    "description": "Academic Examples",
    "name": "Academic Examples",
    icon: "school",
    data: [
      {
        id: uuidv4(),
        "name": "calendario-matcom",
        "url": "https://github.com/codestrange/calendario-matcom",
        "description": "Website for creating schedules easily",
      },
      {
        id: uuidv4(),
        "name": "gateways",
        "url": "https://github.com/glpzzz/gateways)",
        "description": "Node.js + Express + MongoDB + Vue.js CRUD example.",
      },
      {
        id: uuidv4(),
        "name": "matcom-messenger",
        "url": "https://github.com/codestrange/matcom-messenger",
        "description":
          "Instant messaging system distributed and decentralized with client test application.",
      },
      {
        id: uuidv4(),
        "name": "numerical-integral-equation",
        "url": "https://github.com/leynier/numerical-integral-equation",
        "description": "Software to solve integral equations numerically.",
      },
      {
        id: uuidv4(),
        "name": "numerical-integration",
        "url": "https://github.com/leynier/numerical-integration",
        "description": "Software to solve integrals numerically.",
      },
      {
        id: uuidv4(),
        "name": "numerical-nonlinear-equation",
        "url": "https://github.com/leynier/numerical-nonlinear-equation",
        "description": "Software to solve nonlinear equations numerically.",
      },
      {
        id: uuidv4(),
        "name": "shellout",
        "url": "https://github.com/codestrange/shellout",
        "description": "Simulator of a Linux shell",
      },
      {
        id: uuidv4(),
        "name": "viajes-uh",
        "url": "https://github.com/codestrange/viajes-uh",
        "description":
          "Website for the planning and control of the flow of trips of the University of Havana.",
      },

      {
        id: uuidv4(),
        "name": "vimasm",
        "url": "https://github.com/leynier/vimasm)",
        "description": "Console text editor implemented in assembly code.",
      },
      {
        id: uuidv4(),
        "name": "wall-e",
        "url": "https://github.com/leynier/wall-e",
        "description": "SINTIME programming language simulator and compiler.",
      },

      {
        id: uuidv4(),
        "name": "warehouse-producer-consumer",
        "url": "https://github.com/codestrange/warehouse-producer-consumer)",
        "description": " Example application of the [producer consumer problem]",
      },
      {
        id: uuidv4(),
        "name": "webserver",
        "url": "https://github.com/codestrange/webserver",
        "description": "Web server implemented in C.",
      },
    ],
  },
  {
    category: "android_apps",
    "description": "Android Apps",
    data: [
      {
        id: uuidv4(),
        "name": "BacheSMS",
        "url": "https://github.com/n3omaster/BacheSMS",
        "description": "Send SMS from Nauta Email.",
      },
      {
        id: uuidv4(),
        "name": "BankDroid",
        "url": "https://github.com/rlazom/BankDroid",
        "description": "Transfermovil messages cool interpreter",
      },
      {
        id: uuidv4(),
        "name": "Cuba Weather",
        "url": "https://github.com/leynier/cuba-weather-flutter",
        "description":
          "Mobile client application for [www.redcuba.cu] weather API",
      },
      {
        id: uuidv4(),
        "name": "Covid19 Cuba",
        "url": "https://github.com/covid19cuba/covid19cuba-app",
        "description": " Mobile application of Covid19 Cuba Data",
      },

      {
        id: uuidv4(),
        "name": "daxSmail",
        "url": "https://github.com/daxslab/daxSmail",
        "description":
          "Email client based on [k9mail](https://github.com/k9mail/k-9) with some changes to simplify configuring Nauta email accounts.",
      },

      {
        id: uuidv4(),
        "name": "Es WIFI_ETECSA?",
        "url": "https://github.com/daxslab/es_wifi_etecsa",
        "description":
          "Checks for security vulnerabilities while connecting to WIFI_ETECSA.",
      },
      {
        id: uuidv4(),
        "name": "Escala Geriátrica",
        "url": "https://github.com/daxslab/escala-geriatrica",
        "description":
          "Escala Geriátrica de Evaluación Funcional Global is an instrument used in Cuba to evaluate elder people autonomy. This is an Android implementation.",
      },
      {
        id: uuidv4(),
        "name": "FotoRecarga",
        "url": "https://github.com/daxslab/fotorecarga",
        "description":
          "Easily reload credit from ETECSA coupons using the camera on your smartphone",
      },
      {
        id: uuidv4(),
        "name": "HogarEnCuba",
        "url": "https://github.com/daxslab/hogarencuba-mobile",
        "description": "Client for www.hogarencuba.com made in Flutter",
      },
      {
        id: uuidv4(),
        "name": "MetroTrans",
        "url": "https://github.com/aleguerra05/metro_trans",
        "description": "Transaction viewer for Transfermovil Cuban app.",
      },
      {
        id: uuidv4(),
        "name": "NautaClear",
        "url": "https://github.com/n3omaster/NautaClear",
        "description": "Simple app to clean Nauta email account.",
      },
      {
        id: uuidv4(),
        "name": "PorLaLivreApp",
        "url": "https://github.com/Nenirey/Rellama",
        "description":
          "Android app to check listings in www.porlalivre.com while offline.",
      },
      {
        id: uuidv4(),
        "name": "Rellama",
        "url": "https://github.com/daxslab/hogarencuba-mobile",
        "description":
          "This is an Radial app using lamw, Lazarus and Free Pascal, download in [apklis](https://www.apklis.cu/application/com.example.appintentdemo3).",
      },
      {
        id: uuidv4(),
        "name": "ShakeItOff",
        "url": "https://github.com/jadolg/ShakeItOff",
        "description": "Turn off your Android phone screen by shaking it",
      },
      {
        id: uuidv4(),
        "name": "UCIntlm",
        "url": "https://github.com/jadolg/UCIntlm",
        "description": "ntlm proxy (no root required) for Android.",
      },
    ],
  },
  {
    category: "API",
    "description": "APIs",
    data: [
      {
        id: uuidv4(),
        "name": "rocketchat_API",
        "url": "https://github.com/jadolg/rocketchat_API",
        "description": "REST API wrapper for [Rocket.Chat]",
      },
      {
        id: uuidv4(),
        "name": "vpn2go",
        "url": "https://github.com/jadolg/vpn2go",
        "description": "Easy setup and API management for OpenVPN server",
      },
    ],
  },
  {
     category: "graphQL",
    "description": "GraphQL",
    "name": "",
    data: [
      {
        id: uuidv4(),
        "name": "GraphqlController",
        "url": "https://github.com/Develop-Genesis/Graphql-Controller",
        "description": "Library to develop GraphQL apis in .Net",
      },
    ],
  },
  {
    category: "arduino_libraries",
    "description": "Arduino libraries",
    data: [

      {
        id: uuidv4(),
        "name": "Bmux",
        "url": "https://github.com/pavelmc/Si5351mcu",
        "description": " A library that allows you to simulate a Yaesu Radio FT-857D with your arduino, very usefull for ham radio projects.",
      },   {
        id: uuidv4(),
        "name": "FT-857D CAT control",
        "url": "https://github.com/pavelmc/BMux",
        "description": "An alternative library for the Si5351 etherkit official one, very small and with more clean signals.",
      },   {
        id: uuidv4(),
        "name": "Bmux",
        "url": "https://github.com/pavelmc/stepperUnipolar",
        "description": "A non-blocking stepper Library to control unipolar Motors",
      },
        {
        id: uuidv4(),
        "name": "Yatuli",
        "url": "https://github.com/pavelmc/Yatuli",
        "description": "Yet another tune lib, you do not have a rotary encoder for a project? no problem use a linear potentiometer for that."
      }
    ],
  },
  {
    category: "arduino_projects",
    "description": "Arduino Projects",
    data: [],
  },
  {
    category: "bots",
    "description": "Bots",
    data: [],
  },
  {
    category: "catalogs",
    "description": "Catalogs",
    data: [],
  },
  {
    category: "competitive_programming",
    "description": "Competitive Programming",
    data: [],
  },
  {
    category: "docker",
    "description": "Docker",
    data: [],
  },
  {
    category: "game_engine",
    "description": "Game Engine",
    data: [],
  },
  {
    category: "hacks",
    "description": "Hacks",
    data: [],
  },
  {
    category: "ides",
    "description": "Integrated Development Environments (IDEs)",
    "name": "IDEs",
    data: [],
  },
  {
    category: " IoT",
    "description": " Internet of Things (IoT)",
    "name": "IoT",
    data: [],
  },
  {
    category: "multimedia",
    "description": "Multimedia",
    data: [],
  },
  {
    category: "monitoring_observability",
    "description": "Monitoring & Observability",
    data: [],
  },
  {
    category: "machine-learning_deep-Learning-models",
    "description": "Machine Learning / Deep Learning Models",
    data: [],
  },
  {
    category: "scientific_software",
    "description": "Scientific software",
    data: [],
  },
  {
    category: "other_Scientific_Projects",
    "description": "Other Scientific Open Source Projects",
    data: [],
  },
  {
    category: "engineering_calculations",
    "description": "Engineering Calculations",
    data: [],
  },
  {
    category: "repository_management",
    "description": "Repository management",
    data: [],
  },
  {
    category: "sdk",
    "description": "SDK",
    data: [],
  },
  {
    category: "system",
    "description": "System",
    data: [],
  },
  {
    category: "Desktop",
    "description": "desktop",
    data: [],
  },
  {
    category: "tutorials_challenges",
    "description": "Tutorials & Challenges",
    data: [],
  },
  {
    category: "gitHub_actions",
    "description": "GitHub actions",
    data: [],
  },
  {
    category: "web_applications",
    "description": "Web Applications",
    data: [],
  },
];
