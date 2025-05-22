import iphone14 from '../assets/iphone-14-pro-max.png';
import galaxyS24 from '../assets/samsung-galaxy-s24.png';
import googlePixel from '../assets/google-pixel.png';
import canonEOS from '../assets/canon-eos-r10.png';
import sonyAlpha from '../assets/sony-alpha-a6400.png';
import appleWatch from '../assets/apple-watch-series-9.png'; 
import fitbitWatch from '../assets/fitbit-versa-4.png';
import macbookPro from '../assets/macbook-pro-14-m2.png';
import boseHeadphones from '../assets/bose-quietcomfort-45.png';
import airpodsPro from '../assets/airpods-pro-2nd-gen.png';
import playstation5 from '../assets/playstation-5.png';
import nintendoSwitch from '../assets/nintendo-switch-oled.png';
import logitechMouse from '../assets/logitech-g502-hero.png';
import razerKeyboard from '../assets/razer-huntsman-mini.png';
import xboxSeriesX from '../assets/xbox-series-x.png';
import samsungWatch from '../assets/samsung-galaxy-watch-6.png';
import sonyheadphones from '../assets/sony-wh-1000xm5.png';
import asusLaptop from '../assets/asus-rog-zephyrus-g14.png';
import dellLaptop from '../assets/dell-xps-13-plus.png';
import goprohero from '../assets/gopro-hero11.png';



const intialProducts = [
    {
        id: 1,
        title: "iPhone 14 Pro Max",
        price: 1199.99,
        description: "The iPhone 15 Pro introduces cutting-edge features, including a titanium frame, a powerful A17 Pro chip, and enhanced photography capabilities. With a 6.1-inch Super Retina XDR display, it offers stunning clarity and vibrant colors. The Pro Max model features a 48MP main camera for exceptional detail and precision, while the A17 Pro chip ensures a fast and fluid user experience.",
        image: iphone14,
        category: "Phones",
        characteristics: [
            { icon: 'Smartphone', title: 'Screen size', content: "6'7" },
            { icon: 'Cpu', title: 'CPU', content: "Apple A16 Bionic" },
            { icon: 'Microchip', title: 'Cores', content: "6" },
            { icon: 'SwitchCamera', title: 'Main Camera', content: "48-12-12 MP" },
            { icon: 'Camera', title: 'Front Camera', content: "12 MP" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "4323 mAh" },
        ],
        options: [
            '128GB',
            '256GB',
            '512GB',
            '1TB'
        ]

    },
    {
        id: 2,
        title: "Galaxy S23 Ultra",
        price: 1099.99,
        description: "The Samsung Galaxy S24 Ultra is a premium smartphone that combines elegant design with exceptional performance. Equipped with a 6.8-inch Dynamic AMOLED 2X display, it delivers an immersive visual experience with vibrant colors and sharp details. Its powerful Snapdragon 8 Gen 2 processor ensures smooth operation, while its camera system, led by a 200MP main sensor, allows you to capture high-quality images and videos in a variety of conditions.",
        image: galaxyS24,
        category: "Phones",
        characteristics: [
            { icon: 'Smartphone', title: 'Screen size', content: "6.8' Dynamic AMOLED 2X Display" },
            { icon: 'Cpu', title: 'CPU', content: "Snapdragon 8 Gen 2" },
            { icon: 'Microchip', title: 'Cores', content: "8" },
            { icon: 'SwitchCamera', title: 'Main Camera', content: "200-12-10-10 MP" },
            { icon: 'Camera', title: 'Front Camera', content: "12 MP" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "5000mAh with 45W fast charging" },
        ],
        options: [
            '256GB',
            '512GB',
            '1TB'
        ]
    },
    {
        id: 3,
        title: "Google Pixel 8",
        price: 899.99,
        description: "The Google Pixel 8 offers a pure Android experience with updates direct from Google. Its 6.2-inch OLED display delivers clear, fluid visuals, while the Tensor G3 processor optimizes performance and power efficiency. The Pixel 8's photography capabilities are highlighted by its 50MP main camera and advanced AI features to enhance every shot.",
        image: googlePixel,
        category: "Phones",
        characteristics: [
            { icon: 'Smartphone', title: 'Screen size', content: "6.2' OLED Display" },
            { icon: 'Cpu', title: 'CPU', content: "Google Tensor G3" },
            { icon: 'Microchip', title: 'Cores', content: "9 - Nona Core" },
            { icon: 'SwitchCamera', title: 'Main Camera', content: "50-12 MP" },
            { icon: 'Camera', title: 'Front Camera', content: "10.5 MP" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "4575mAh with 27W fast charging" },
        ],
        options: [
            '128GB',
            '256GB',
        ]
    },
    {
        id: 4,
        title: "Canon EOS R10",
        price: 999.00,
        description: "The Canon EOS R10 is a compact mirrorless camera that offers outstanding performance for both photographers and videographers. With a 24.2 MP APS-C sensor and Dual Pixel CMOS AF II autofocus system, it delivers sharp and detailed images. Additionally, it can record 4K videos at 60 fps, making it an ideal tool for content creators.",
        image: canonEOS,
        category: "Cameras",
        characteristics: [
            { icon: 'Camera', title: 'Camera', content: "24.2 MP APS-C Sensor" },
            { icon: 'Cpu', title: 'CPU', content: "DIGIC X Processor" },
            { icon: 'Microchip', title: 'Microchip', content: "Dual Pixel CMOS AF II" },
            { icon: 'Video', title: 'Video Recording', content: "4K Video at 60 fps" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "LP-E17 Battery" },
            { icon: 'MonitorCheck', title: 'Screen', content: "3' vari-angle LCD touchscreen" },
        ],
        options: [
            'Only Body',
            'With 18-45mm lens',
            'With 18-150mm lens'
        ]
    },
    {
        id: 5,
        title: "Sony Alpha a6400",
        price: 1098.00,
        description: "The Sony Alpha a6400 is a versatile mirrorless camera with ultra-fast autofocus at 0.02 seconds and real-time tracking. Its 24.2 MP APS-C sensor and 4K video recording capabilities make it an ideal choice for photographers and videographers who seek portability and performance.",
        image: sonyAlpha,
        category: "Cameras",
        characteristics: [
            { icon: 'Camera', title: 'Camera', content: "24.2 MP APS-C Sensor" },
            { icon: 'Cpu', title: 'CPU', content: "BIONZ X Processor" },
            { icon: 'Microchip', title: 'Microchip', content: "425-point autofocus" },
            { icon: 'Video', title: 'Video Recording', content: "4K Video" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "NP-FW50 Battery" },
            { icon: 'MonitorCheck', title: 'Screen', content: "3' tiltable LCD touchscreen" },
        ],
        options: [
            'Only Body',
            'With 16-50mm lens',
            'With 18-135mm lens'
        ]
    },
    {
        id: 6,
        title: "Apple Watch Series 9",
        price: 499.00,
        description: "The Apple Watch Series 9 combines elegant design with advanced health and connectivity features. Equipped with the S9 SiP chip, it offers efficient performance and new features like double-tap detection. It tracks heart rate, blood oxygen levels, and more, making it the ideal companion for an active lifestyle.",
        image: appleWatch,
        category: "Smart Watches",
        characteristics: [
            { icon: 'Monitor', title: 'Display', content: "Always-On Retina Display" },
            { icon: 'Cpu', title: 'CPU', content: "S9 SiP Chip" },
            { icon: 'Activity', title: 'Sensors', content: "Blood Oxygen Sensor" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "Up to 18 hours of battery life" },
            { icon: 'HeartPulse', title: 'Other Features', content: "Advanced health monitoring (heart rate, ECG, etc.)" },
        ],
        options: [
            '41mm',
            '45mm'
        ]
    },
    {
        id: 7,
        title: "Samsung Galaxy Watch 6",
        price: 399.00,
        description: "The Samsung Galaxy Watch 6 offers a refined design and advanced health and wellness features. With its Super AMOLED display and Wear OS operating system, it allows for detailed tracking of physical activity, sleep, and more while keeping you connected at all times.",
        image: samsungWatch,
        category: "Smart Watches",
        characteristics: [
            { icon: 'Monitor', title: 'Display', content: "Super AMOLED Display" },
            { icon: 'Cpu', title: 'CPU', content: "Exynos W930 Processor" },
            { icon: 'Activity', title: 'Sensors', content: "BioActive Sensor" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "Up to 17 hours of battery life" },
            { icon: 'HeartPulse', title: 'Other Features', content: "Fitness tracking, heart rate monitor, sleep tracking" },
        ],
        options: [
            '41mm',
            '45mm'
        ]
    },
    {
        id: 8,
        title: "Fitbit Versa 4",
        price: 229.95,
        description: "The Fitbit Versa 4 is a smartwatch focused on wellness and physical activity. With over 40 exercise modes, built-in GPS, and apps like Google Maps and Wallet, it’s a comprehensive tool for those who want to stay active and connected.",
        image: fitbitWatch,
        category: "Smart Watches",
        characteristics: [
            { icon: 'Monitor', title: 'Display', content: "Color Touchscreen Display" },
            { icon: 'Cpu', title: 'CPU', content: "Low-power processor" },
            { icon: 'Activity', title: 'Sensors', content: "Heart Rate Sensor" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "Up to 6 days of battery life" },
            { icon: 'HeartPulse', title: 'Other Features', content: "Sleep tracking, activity tracking" },
        ],
        options: [
            '41mm',
            '45mm'
        ]
    },
    {
        id: 9,
        title: "MacBook Pro 14” M2",
        price: 1999.00,
        description: "The 14-inch MacBook Pro with the M2 chip combines power and portability. Its Liquid Retina XDR display provides vibrant colors and precise details, while the M2 chip ensures exceptional performance for professional and creative tasks.",
        image: macbookPro,
        category: "Computers",
        characteristics: [
            { icon: 'Monitor', title: 'Display', content: "14' Liquid Retina XDR Display" },
            { icon: 'Cpu', title: 'CPU', content: "Apple M2 Chip" },
            { icon: 'Microchip', title: 'Microchip', content: "8-core CPU, 10-core GPU" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "Up to 17 hours of battery life" },
            { icon: 'Camera', title: 'Camera', content: "1080p FaceTime HD Camera" },
            { icon: 'CircleHelp', title: 'Other Features', content: "Advanced ProMotion for smooth visuals" },
        ],
        options: [
            '512GB',
            '1TB',
            '2TB'
        ]
    },
    {
        id: 10,
        title: "Dell XPS 13 Plus",
        price: 1399.99,
        description: "The Dell XPS 13 Plus is a sleek ultrabook that offers powerful performance in an elegant design. Equipped with Intel’s latest processors and an OLED display, it’s ideal for professionals who need mobility without sacrificing power.",
        image: dellLaptop,
        category: "Computers",
        characteristics: [
            { icon: 'Monitor', title: 'Display', content: "13.4' OLED Display" },
            { icon: 'Cpu', title: 'CPU', content: "Intel Core i7, 12th Gen" },
            { icon: 'Microchip', title: 'GPU', content: "Intel Iris Xe GPU" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "Up to 14 hours of battery life" },
            { icon: 'Camera', title: 'Camera', content: "720p HD Camera" },
            { icon: 'CircleHelp', title: 'Other Features', content: "Ultra-thin design, 4K display option" },
        ],
        options: [
            '512GB',
            '1TB',
            '2TB'
        ]
    },
    {
        id: 11,
        title: "ASUS ROG Zephyrus G14",
        price: 1599.99,
        description: "The ASUS ROG Zephyrus G14 is a gaming powerhouse packed into a compact body. Featuring the AMD Ryzen 9 processor and NVIDIA GeForce RTX 3060, it delivers exceptional performance for gaming and multitasking. The 14-inch display with a 120Hz refresh rate ensures smooth visuals, while its lightweight design makes it portable and easy to carry.",
        image: asusLaptop,
        category: "Computers",
        characteristics: [
            { icon: 'Monitor', title: 'Display', content: "14' Full HD Display with 120Hz refresh rate" },
            { icon: 'Cpu', title: 'Processor', content: "AMD Ryzen 9 5900HS" },
            { icon: 'Microchip', title: 'RAM', content: "16GB DDR4" },
            { icon: 'Gpu', title: 'GPU', content: "NVIDIA GeForce RTX 3060 GPU" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "76WHr with fast charging" },
            { icon: 'CircleHelp', title: 'Other Features', content: "RGB Keyboard, Advanced cooling system" },
        ],
        options: [
            '512GB',
            '1TB',
            '2TB'
        ]
    },
    {
        id: 12,
        title: "Sony WH-1000XM5",
        price: 399.99,
        description: "The Sony WH-1000XM5 headphones deliver world-class noise cancellation with superior sound quality. Equipped with a new integrated processor, they offer a personalized listening experience with adaptive sound control. These headphones are designed for comfort, with up to 30 hours of battery life, making them ideal for long listening sessions.",
        image: sonyheadphones,
        category: "Headphones",
        characteristics: [
            { icon: 'Headphones', title: 'Headphones', content: "Over-ear design" },
            { icon: 'Cpu', title: 'Processor', content: "Integrated QN1 Processor" },
            { icon: 'Microchip', title: 'Microchip', content: "Adaptive Sound Control" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "Up to 30 hours with quick charge (3 min charge for 3 hours of use)" },
            { icon: 'CircleHelp', title: 'Other Features', content: "Noise cancellation, touch controls, high-res audio support" },
        ],
        options: [
            'Clean Kit',
            'Active noise cancellation',
            'Active noise cancellation + Clean kit'
        ]
    },
    {
        id: 13,
        title: "Bose QuietComfort 45",
        price: 329.00,
        description: "The Bose QuietComfort 45 offers exceptional noise cancellation and supreme comfort. With its Acoustic Noise Cancelling technology, it provides immersive sound and a superior listening experience. The headphones are perfect for long flights or daily use, with up to 24 hours of battery life and quick charge feature",
        image: boseHeadphones,
        category: "Headphones",
        characteristics: [
            { icon: 'Headphones', title: 'Headphones', content: "Over-ear design" },
            { icon: 'Cpu', title: 'Processor', content: "Proprietary Bose Electronics" },
            { icon: 'Microchip', title: 'Microchip', content: "Active Noise Cancelling" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "Up to 24 hours" },
            { icon: 'CircleHelp', title: 'Other Features', content: "Adjustable noise cancellation levels" },
        ],
        options: [
            'Clean Kit',
            'Active noise cancellation',
            'Active noise cancellation + Clean kit'
        ]
    },
    {
        id: 14,
        title: "AirPods Pro 2nd Gen",
        price: 249.00,
        description: "The AirPods Pro 2nd Gen offers an immersive sound experience with Active Noise Cancellation and Adaptive Transparency. Equipped with the H2 chip, it provides better sound quality and longer battery life, while the new design ensures a comfortable and secure fit. Perfect for sports and on-the-go use.",
        image: airpodsPro,
        category: "Headphones",
        characteristics: [
            { icon: 'Headphones', title: 'Headphones', content: "In-ear design with silicone tips" },
            { icon: 'Cpu', title: 'Processor', content: "H2 chip" },
            { icon: 'Microchip', title: 'Microchip', content: "Active Noise Cancelling" },
            { icon: 'BatteryCharging', title: 'Battery Capacity', content: "Up to 6 hours of listening time (with ANC on)" },
            { icon: 'CircleHelp', title: 'Other Features', content: "Spatial Audio, Adaptive Transparency, IPX4 water resistance" },
        ],
        options: [
            'Clean Kit',
            'Active noise cancellation',
            'Active noise cancellation + Clean kit'
        ]
    },
    {
        id: 15,
        title: "PlayStation 5",
        price: 499.99,
        description: "The PlayStation 5 is a next-generation gaming console with ultra-fast SSD and ray tracing technology. It offers an immersive gaming experience with stunning visuals and fast load times. With the new DualSense controller, you can feel every impact and sensation in the game world. It supports 4K resolution and 120Hz gaming.",
        image: playstation5,
        category: "Gaming",
        characteristics: [
            { icon: 'Gamepad', title: 'Console', content: "Supports 4K gaming" },
            { icon: 'Cpu', title: 'Processor', content: "AMD Ryzen Zen 2 Architecture" },
            { icon: 'Microchip', title: 'Microchip', content: "RDNA 2 GPU" },
            { icon: 'Database', title: 'Storage', content: "825GB SSD" },
            { icon: 'CircleHelp', title: 'Other Features', content: "DualSense Controller with haptic feedback and adaptive triggers" },
        ],
        options: [
            'Additional Controll',
            'Headphones',
            'External Hard Disk 1TB SSD'
        ]
    },
    {
        id: 16,
        title: "Xbox Series X",
        price: 499.99,
        description: "The Xbox Series X delivers high-performance gaming with 4K graphics and support for 120Hz gaming. Powered by an 8-core AMD Zen 2 processor, it offers smooth and responsive gameplay. With Game Pass access, you can instantly play hundreds of games without additional cost, making it a fantastic all-in-one entertainment device.",
        image: xboxSeriesX,
        category: "Gaming",
        characteristics: [
            { icon: 'Gamepad', title: 'Console', content: "Supports 4K gaming" },
            { icon: 'Cpu', title: 'Processor', content: "AMD Ryzen Zen 2" },
            { icon: 'Microchip', title: 'Microchip', content: "RDNA 2 GPU" },
            { icon: 'Database', title: 'Storage', content: "1TB SSD" },
            { icon: 'CircleHelp', title: 'Other Features', content: "3 Months Xbox Game Pass access, fast load times" },
        ],
        options: [
            'Additional Controll',
            'Headphones',
            'External Hard Disk 1TB SSD'
        ]
    },
    {
        id: 17,
        title: "Nintendo Switch OLED",
        price: 349.99,
        description: "The Nintendo Switch OLED model is perfect for gamers on the go. With an improved 7-inch OLED screen, it offers vibrant colors and deeper blacks. Whether docked for TV play or handheld, the enhanced screen and extended battery life make it a versatile choice for gaming anywhere.",
        image: nintendoSwitch,
        category: "Gaming",
        characteristics: [
            { icon: 'Gamepad', title: 'Console', content: "7' OLED screen" },
            { icon: 'Cpu', title: 'Processor', content: "Custom NVIDIA Tegra Processor" },
            { icon: 'Microchip', title: 'Microchip', content: "Integrated GPU" },
            { icon: 'Database', title: 'Storage', content: "64GB internal storage" },
            { icon: 'CircleHelp', title: 'Other Features', content: "Supports both handheld and docked gaming modes" },
        ],
        options: [
            'Additional Controll',
            'Headphones',
            'External Hard Disk 1TB SSD'
        ]
    },
    {
        id: 18,
        title: "Logitech G502 Hero",
        price: 49.99,
        description: "The Logitech G502 Hero is a high-performance gaming mouse designed for precision and customization. With the Hero sensor and customizable weights, it delivers responsive control and accuracy in every game. Its RGB lighting and 11 programmable buttons offer a personalized touch to your setup.",
        image: logitechMouse,
        category: "Gaming",
        characteristics: [
            { icon: 'Mouse', title: 'Mouse', content: "Wired, ergonomic design" },
            { icon: 'Activity', title: 'Sensor', content: "HERO 25K Sensor" },
            { icon: 'Microchip', title: 'Microchip', content: "11 programmable buttons" },
            { icon: 'CircleHelp', title: 'Other Features', content: "RGB Lighting, customizable weights" },
        ],
        options: [
            'Custom Keyboard pieces',
            'Clean and maintenance kit',
        ]
    },
    {
        id: 19,
        title: "Razer Huntsman Mini",
        price: 129.99,
        description: "The Razer Huntsman Mini is a compact 60% mechanical gaming keyboard that uses optical switches for faster response times and durability. Its small size makes it perfect for gamers who need portability without sacrificing performance. With Razer Chroma RGB, you can customize your lighting setup to match your style.",
        image: razerKeyboard,
        category: "Gaming",
        characteristics: [
            { icon: 'Keyboard', title: 'Keyboard', content: "60% compact design" },
            { icon: 'Activity', title: 'Sensor', content: "Razer Optical Switches" },
            { icon: 'Microchip', title: 'Microchip', content: "Chroma RGB Lighting" },
            { icon: 'CircleHelp', title: 'Other Features', content: "60% layout, ultra-responsive key switches" },
        ],
        options: [
            'Custom Keyboard pieces',
            'Clean and maintenance kit',
        ]
    },
    {
        id: 20,
        title: "GoPro HERO11",
        price: 499.99,
        description: "The GoPro HERO11 is the ultimate adventure camera, offering 5.3K video recording with HyperSmooth 5.0 stabilization. It captures stunning footage in any environment, whether you're diving, hiking, or engaging in extreme sports. The HERO11 is perfect for capturing your adventures in ultra-high-definition quality.",
        image: goprohero,
        characteristics: [
            { icon: 'Video', title: 'Video', content: "5.3K Video at 60 fps" },
            { icon: 'Camera', title: 'Camera', content: "5.3K video, 23 MP photos" },
            { icon: 'Cpu', title: 'CPU', content: "GP2 Processor" },
            { icon: 'Microchip', title: 'Microchip', content: "HyperSmooth 5.0 Stabilization" },
            { icon: 'BatteryCharging', title: 'Battery Charging', content: "1720mAh (up to 2.5 hours of recording)" },
            { icon: 'CircleHelp', title: 'Other Features', content: "Waterproof up to 10 meters, voice control, TimeWarp 3.0" },
        ],
        options: [
            'Custom Keyboard pieces',
            'Clean and maintenance kit',
        ]
    }
];

const orders = [
    {
      orderId: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pending",
    },
    {
      orderId: "#FWB127364373",
      date: "21.12.2023",
      price: "$1,256",
      status: "Delivered",
    },
    {
      orderId: "#FWB127364374",
      date: "22.12.2023",
      price: "$3,499",
      status: "Cancelled",
    },
    {
      orderId: "#FWB127364375",
      date: "23.12.2023",
      price: "$2,250",
      status: "Delivered",
    },
    {
      orderId: "#FWB127364376",
      date: "24.12.2023",
      price: "$5,120",
      status: "Pending",
    },
    {
      orderId: "#FWB127364377",
      date: "25.12.2023",
      price: "$1,050",
      status: "Delivered",
    },
    {
      orderId: "#FWB127364378",
      date: "26.12.2023",
      price: "$6,300",
      status: "Pending",
    },
    {
      orderId: "#FWB127364379",
      date: "27.12.2023",
      price: "$7,899",
      status: "Cancelled",
    },
    {
      orderId: "#FWB127364380",
      date: "28.12.2023",
      price: "$3,845",
      status: "Delivered",
    },
    {
      orderId: "#FWB127364381",
      date: "29.12.2023",
      price: "$2,875",
      status: "Pending",
    },
    {
      orderId: "#FWB127364382",
      date: "30.12.2023",
      price: "$9,230",
      status: "Delivered",
    },
    {
      orderId: "#FWB127364383",
      date: "31.12.2023",
      price: "$5,999",
      status: "Cancelled",
    },
    {
      orderId: "#FWB127364384",
      date: "01.01.2024",
      price: "$1,999",
      status: "Delivered",
    },
    {
      orderId: "#FWB127364385",
      date: "02.01.2024",
      price: "$3,150",
      status: "Pending",
    },
    {
      orderId: "#FWB127364386",
      date: "03.01.2024",
      price: "$4,820",
      status: "Delivered",
    },
    {
      orderId: "#FWB127364387",
      date: "04.01.2024",
      price: "$6,540",
      status: "Cancelled",
    },
    {
      orderId: "#FWB127364388",
      date: "05.01.2024",
      price: "$2,200",
      status: "Pending",
    },
    {
      orderId: "#FWB127364389",
      date: "06.01.2024",
      price: "$7,100",
      status: "Delivered",
    },
    {
      orderId: "#FWB127364390",
      date: "07.01.2024",
      price: "$3,300",
      status: "Pending",
    },
    {
      orderId: "#FWB127364391",
      date: "08.01.2024",
      price: "$5,555",
      status: "Delivered",
    },
  ];

export { intialProducts, orders };