// const productGroups = [
//     {
//         name: "SOUND CRACKERS",
//         products: [
//             { id: 1, name: "4\" LAKSHMI DELUXE,BHEEM,SPIDER", per: "1 Pkt", price: 66 },
//             { id: 2, name: "4\" LAKSHMI,PARROT,SPIDER,BHEEM", per: "1 Pkt", price: 55 },
//             { id: 3, name: "3 1/2\" LAKSHMI,BHEEM,SPIDER", per: "1 Pkt", price: 36 },
//             { id: 4, name: "2 3/4\" KURUK", per: "1 Pkt", price: 30 },
//             { id: 5, name: "TWO SOUND CRACKERS", per: "1 Pkt", price: 72 },
//             { id: 6, name: "TWO SOUND GREEN", per: "1 Pkt", price: 132 }
//         ]
//     },

//     {
//         name: "CHORSA CRACKERS",
//         products: [
//             { id: 7, name: "28 CHORSA TURKEY,TAJ", per: "1 Pkt", price: 41 },
//             { id: 8, name: "56 CHORSA TURKEY,TAJ", per: "1 Pkt", price: 82 }
//         ]
//     },

//     {
//         name: "GAINT CRACKERS",
//         products: [
//             { id: 9, name: "28 SUPER GAINT TIGER,TAJ", per: "1 Pkt", price: 63 },
//             { id: 10, name: "56 SUPER GAINT TIGER,TAJ", per: "1 Pkt", price: 126 }
//         ]
//     },

//     {
//         name: "DELUXE CRACKERS",
//         products: [
//             { id: 11, name: "24 DELUXE", per: "1 Pkt", price: 122 },
//             { id: 12, name: "28 DELUXE", per: "1 Pkt", price: 145 },
//             { id: 13, name: "50 DELUXE", per: "1 Pkt", price: 270 }
//         ]
//     },

//     {
//         name: "BUJILI CRACKERS",
//         products: [
//             { id: 14, name: "RED BUJILI (100 PCS)", per: "1 Bag", price: 81 },
//             { id: 15, name: "STRIPPED BUJILI (100 PCS)", per: "1 Bag", price: 87 },
//             { id: 16, name: "RED BUJILI (50 PCS)", per: "1 Bag", price: 41 },
//             { id: 17, name: "STRIPPED BUJILI (50 PCS)", per: "1 Bag", price: 45 },
//             { id: 18, name: "JOLLY 100", per: "1 Box", price: 126 },
//             { id: 19, name: "FANTASY 200", per: "1 Box", price: 252 },
//             { id: 20, name: "ENJOY 300", per: "1 Box", price: 378 },
//             { id: 21, name: "BEAUTY 600", per: "1 Box", price: 756 },
//             { id: 22, name: "SHINY 1000", per: "1 Box", price: 945 },
//             { id: 23, name: "JAMMAI 2000", per: "1 Box", price: 1890 },
//             { id: 24, name: "DISNEY 3000", per: "1 Box", price: 2835 },
//             { id: 25, name: "LUXURY 5000", per: "1 Box", price: 4725 },
//             { id: 26, name: "ROYAL GALAXY 10000", per: "1 Box", price: 9450 }
//         ]
//     },

//     {
//         name: "BOMBS",
//         products: [
//             { id: 27, name: "BULLET BOMB", per: "1 Box", price: 66 },
//             { id: 28, name: "BATMEN BOMB", per: "1 Box", price: 102 },
//             { id: 29, name: "HYDRO BOMB GREEN", per: "1 Box", price: 153 },
//             { id: 30, name: "JURRASIC BOMB (3PLY)", per: "1 Box", price: 231 },
//             { id: 31, name: "TRACER BOMB GREEN (5PLY)", per: "1 Box", price: 270 },
//             { id: 32, name: "DIGITAL BOMB GREEN", per: "1 Box", price: 390 }
//         ]
//     },

//     {
//         name: "GROUND CHAKKARS",
//         products: [
//             { id: 33, name: "GROUND CHAKKAR BIG (25PCS)", per: "1 Box", price: 195 },
//             { id: 34, name: "GROUND CHAKKAR BIG (10 PCS)", per: "1 Box", price: 97 },
//             { id: 35, name: "GROUND CHAKKAR ASOKA", per: "1 Box", price: 130 },
//             { id: 36, name: "GROUND CHAKKAR SPECIAL", per: "1 Box", price: 160 },
//             { id: 37, name: "GROUND CHAKKAR DELUXE", per: "1 Box", price: 317 },
//             { id: 38, name: "SPINNER SPECIAL", per: "1 Box", price: 168 },
//             { id: 39, name: "SPINNER DELUXE", per: "1 Box", price: 327 }
//         ]
//     },

//     {
//         name: "FLOWER POTS",
//         products: [
//             { id: 40, name: "FLOWER POTS SMALL GREEN", per: "1 Box", price: 130 },
//             { id: 41, name: "FLOWER POTS BIG GREEN", per: "1 Box", price: 180 },
//             { id: 42, name: "FLOWER POTS SPECIAL GREEN", per: "1 Box", price: 231 },
//             { id: 43, name: "FLOWER POTS ASOKA GREEN", per: "1 Box", price: 317 },
//             { id: 44, name: "FLOWER POTS DELUXE GREEN 5PCS", per: "1 Box", price: 372 },
//             { id: 45, name: "FLOWER POTS SUPER DELUXE 2PCS", per: "1 Box", price: 465 },
//             { id: 46, name: "COLOUR KOT", per: "1 Box", price: 573 },
//             { id: 47, name: "COLOUR KOT DELUXE", per: "1 Box", price: 706 },
//             { id: 48, name: "GANGA JAMUNA", per: "1 Box", price: 149 }
//         ]
//     },

//     {
//         name: "CHILDREN'S SPECIAL",
//         products: [
//             { id: 49, name: "1 1/2\" TWINKLING STAR", per: "1 Box", price: 72 },
//             { id: 50, name: "4\" TWINKLING STAR DELUXE", per: "1 Box", price: 162 },
//             { id: 51, name: "JIL JIL", per: "1 Unit", price: 662 },
//             { id: 52, name: "7\" PENCIL", per: "1 Box", price: 72 },
//             { id: 53, name: "12\" DELUXE PENCIL", per: "1 Box", price: 160 },
//             { id: 54, name: "15\" ALADDIN PENCIL", per: "1 Box", price: 252 }
//         ]
//     },

//     {
//         name: "ROCKETS",
//         products: [
//             { id: 55, name: "COLOUR ROCKET", per: "1 Box", price: 144 },
//             { id: 56, name: "ROCKET BOMB", per: "1 Box", price: 149 },
//             { id: 57, name: "LUNIK EXPRESS", per: "1 Box", price: 263 },
//             { id: 58, name: "DOUBLE SOUND ROCKET", per: "1 Box", price: 279 },
//             { id: 59, name: "THREE SOUND ROCKET", per: "1 Box", price: 290 }
//         ]
//     },

//     {
//         name: "MEGA ROCKET",
//         products: [
//             { id: 60, name: "NIRBHIK ROCKET", per: "1 Box", price: 838 },
//             { id: 61, name: "AGNI ROCKET", per: "1 Box", price: 838 },
//             { id: 62, name: "BRAMOTS ROCKET", per: "1 Box", price: 838 },
//             { id: 63, name: "PRITHIVI ROCKET", per: "1 Box", price: 838 },
//             { id: 64, name: "SHOURYA ROCKET", per: "1 Box", price: 838 }
//         ]
//     },

//     {
//         name: "AERIALS",
//         products: [
//             { id: 65, name: "DARLING DANCER", per: "1 Box", price: 281 },
//             { id: 66, name: "MEGA GREEN", per: "1 Box", price: 585 },
//             { id: 67, name: "7 COLOUR SHOTS (5PCS)", per: "1 Box", price: 270 },
//             { id: 68, name: "EMERALD ROBO (5PCS)", per: "1 Box", price: 306 },
//             { id: 69, name: "SILVER ROBO (5PCS)", per: "1 Box", price: 306 },
//             { id: 70, name: "RUSSIA ROBO (5PCS)", per: "1 Box", price: 306 },
//             { id: 71, name: "SKY PENDA", per: "1 Box", price: 396 }
//         ]
//     },

//     {
//         name: "SOUND NOVELTIES",
//         products: [
//             { id: 72, name: "CHUT PUT", per: "1 Box", price: 138 },
//             { id: 73, name: "MAGIC POPS", per: "1 Box", price: 95 },
//             { id: 74, name: "GOLDEN STAR 5 PCS", per: "1 Box", price: 179 },
//             { id: 75, name: "SILVER STAR 5 PCS", per: "1 Box", price: 179 },
//             { id: 76, name: "WONDER STAR 5 PCS", per: "1 Box", price: 179 },
//             { id: 77, name: "HELICOPTER", per: "1 Box", price: 630 },
//             { id: 78, name: "MILKY WITHY", per: "1 Box", price: 224 },
//             { id: 79, name: "JOLLY RED", per: "1 Box", price: 224 },
//             { id: 80, name: "DOLLY GREEN", per: "1 Box", price: 224 },
//             { id: 81, name: "BUBBLY GOLD", per: "1 Box", price: 224 },
//             { id: 82, name: "DISPIN", per: "1 Box", price: 364 },
//             { id: 83, name: "DISCO WHEEL", per: "1 Box", price: 393 },
//             { id: 84, name: "CRACKTAIL(Fountain Crackling 3pcs)", per: "1 Box", price: 889 }
//         ]
//     },

//     {
//         name: "SKY SHOT COLOURS WINDOW",
//         products: [
//             { id: 85, name: "LAZER SHOW", per: "1 Box", price: 342 },
//             { id: 86, name: "ONLINE", per: "1 Box", price: 342 },
//             { id: 87, name: "SKY KING", per: "1 Box", price: 342 },
//             { id: 88, name: "SKY GEL", per: "1 Box", price: 342 },
//             { id: 89, name: "SKY DANCER", per: "1 Box", price: 342 },
//             { id: 90, name: "STAR WAR", per: "1 Box", price: 342 }
//         ]
//     },

//     {
//         name: "1 3/4\" FANCY (3 PIECES PACKING)",
//         products: [
//             { id: 91, name: "GREEN ANGELS", per: "1 Box", price: 737 },
//             { id: 92, name: "MUST U MUST", per: "1 Box", price: 737 },
//             { id: 93, name: "LAL MARCHI", per: "1 Box", price: 737 },
//             { id: 94, name: "PALM TREE", per: "1 Box", price: 737 },
//             { id: 95, name: "RANGELA", per: "1 Box", price: 737 },
//             { id: 96, name: "CITY RAIDER", per: "1 Box", price: 737 },
//             { id: 97, name: "HULK WAR (CRACKLING 3 PCS)", per: "1 Box", price: 810 }
//         ]
//     },

//     {
//         name: "RANG DHARBAR (2\" FANCY SINGLE PCS)",
//         products: [
//             { id: 98, name: "GREEN CROSS", per: "1 Box", price: 414 },
//             { id: 99, name: "RED CROSS", per: "1 Box", price: 414 },
//             { id: 100, name: "GOLDEN ANGEL", per: "1 Box", price: 414 },
//             { id: 101, name: "STAR NIGHT", per: "1 Box", price: 414 },
//             { id: 102, name: "RANGA DE BESNTI", per: "1 Box", price: 414 },
//             { id: 103, name: "CHINY DELIGHT", per: "1 Box", price: 414 },
//             { id: 104, name: "VIP", per: "1 Box", price: 414 }
//         ]
//     },

//     {
//         name: "2\" FANCY (3 PIECES WITH MULTI COLOUR PACKING)",
//         products: [
//             { id: 105, name: "FOLK", per: "1 Box", price: 855 },
//             { id: 106, name: "SWING", per: "1 Box", price: 855 },
//             { id: 107, name: "GYPSY", per: "1 Box", price: 855 },
//             { id: 108, name: "BALLE", per: "1 Box", price: 855 }
//         ]
//     },

//     {
//         name: "2 3/4\" FANCY (2 PCS PACKING)",
//         products: [
//             { id: 109, name: "JUNGLE BEATS (GREEN)", per: "1 Box", price: 1009 },
//             { id: 110, name: "THUNDER HUNTER (RED)", per: "1 Box", price: 1009 },
//             { id: 111, name: "BAD SOLIDER (RED & GREEN)", per: "1 Box", price: 1009 },
//             { id: 112, name: "FUZZY GOLD (YELLOW)", per: "1 Box", price: 1009 },
//             { id: 113, name: "PEARL DROPS (WHITE)", per: "1 Box", price: 1009 },
//             { id: 114, name: "NESCAFE (SUN RISE FUNCTION)", per: "1 Box", price: 1009 },
//             { id: 115, name: "GOLDENHARVEST(Gold&Crackling)", per: "1 Box", price: 1009 },
//             { id: 116, name: "MARS ATTACK (Red with Crackling)", per: "1 Box", price: 1009 },
//             { id: 117, name: "MOON BLAST (White with crackling)", per: "1 Box", price: 1009 }
//         ]
//     },

//     {
//         name: "AKASH MEA (3 1/2\" FANCY)",
//         products: [
//             { id: 118, name: "BALLE BALLE", per: "1 Box", price: 801 },
//             { id: 119, name: "GREEN SHOWER", per: "1 Box", price: 801 },
//             { id: 120, name: "LAAL HARA", per: "1 Box", price: 801 },
//             { id: 121, name: "WHITE CHICKS", per: "1 Box", price: 801 },
//             { id: 122, name: "CRACKLING STAR", per: "1 Box", price: 801 },
//             { id: 123, name: "GALAXY GOLD", per: "1 Box", price: 801 },
//             { id: 124, name: "SILVER TRICKS", per: "1 Box", price: 801 }
//         ]
//     },

//     {
//         name: "1/2\" FANCY DOUBLE BALL FUNCTION",
//         products: [
//             { id: 125, name: "BRAVE (Double Ball Function)", per: "1 Box", price: 1233 },
//             { id: 126, name: "CLARA (Double Ball Function)", per: "1 Box", price: 1233 },
//             { id: 127, name: "HERO (Double Ball Function)", per: "1 Box", price: 1233 },
//             { id: 128, name: "LORAX (Double Ball Function)", per: "1 Box", price: 1233 },
//             { id: 129, name: "RIO (Double Ball Function)", per: "1 Box", price: 1233 },
//             { id: 130, name: "MOANA (Double Ball Function)", per: "1 Box", price: 1233 }
//         ]
//     },

//     {
//         name: "3 1/2\" FANCY (7 STEP FUNCTION)",
//         products: [
//             { id: 131, name: "AGRA INDIA (7 STEP FUNCTION)", per: "1 Box", price: 1080 },
//             { id: 132, name: "MASCO RUSSIA (7 STEP FUNCTION)", per: "1 Box", price: 1080 },
//             { id: 133, name: "PARIS FRANCE (7 STEP FUNCTION)", per: "1 Box", price: 1080 },
//             { id: 134, name: "EGYPT (7 STEP FUNCTION)", per: "1 Box", price: 1080 },
//             { id: 135, name: "NEWYORK (7 STEP FUNCTION)", per: "1 Box", price: 1080 },
//             { id: 136, name: "ROME ITALY (7 STEP FUNCTION)", per: "1 Box", price: 1080 }
//         ]
//     },

//     {
//         name: "4\" FANCY (2 PCS PACKING WINDOW)",
//         products: [
//             { id: 137, name: "DING DONG", per: "1 Box", price: 2403 },
//             { id: 138, name: "JIM JAM", per: "1 Box", price: 2403 },
//             { id: 139, name: "ZIG ZAG", per: "1 Box", price: 2403 },
//             { id: 140, name: "YIN YANG", per: "1 Box", price: 2403 }
//         ]
//     },

//     {
//         name: "5\" FANCY (2 PCS PACKING WINDOW)",
//         products: [
//             { id: 141, name: "APPLE", per: "1 Box", price: 3213 },
//             { id: 142, name: "GRAPES", per: "1 Box", price: 3213 },
//             { id: 143, name: "MANGO", per: "1 Box", price: 3213 },
//             { id: 144, name: "PINEAPPLE", per: "1 Box", price: 3213 }
//         ]
//     },

//     {
//         name: " NEW ARRIVAL",
//         products: [
//             { id: 145, name: "CHUBBY DUBBIES", per: "1 PCS", price: 207 },
//             { id: 146, name: "RIO (FOUNTAIN MINI)", per: "1 PCS", price: 90 },
//             { id: 147, name: "KASHMORA", per: "1 PCS", price: 343 },
//             { id: 148, name: "PEACOCK", per: "1 Box", price: 378 },
//             { id: 149, name: "PEACOCK BIG", per: "1 Box", price: 1058 },
//             { id: 150, name: "BARBIE", per: "1 Box", price: 633 },
//             { id: 151, name: "VIVO", per: "1 Box", price: 238 },
//             { id: 152, name: "JIGGLERS", per: "1 Box", price: 809 },
//             { id: 153, name: "TURBO SKY", per: "1 Box", price: 500 },
//             { id: 154, name: "TRI COLOUR FOUNTAIN", per: "1 Box", price: 945 }
//         ]
//     },

//     {
//         name: "MULTI COLOURS AERIAL",
//         products: [
//             { id: 155, name: "12 COLOUR STARS", per: "1 Box", price: 438 },
//             { id: 156, name: "AERIAL CRACKLING", per: "1 Box", price: 473 },
//             { id: 157, name: "PUBG 15 SHOTS", per: "1 Box", price: 843 },
//             { id: 158, name: "MAZA 30 SHOT / POP 30 SHOTS", per: "1 Box", price: 1558 },
//             { id: 159, name: "FESTIVAL FAN 25 SHOTS", per: "1 Box", price: 893 },
//             { id: 160, name: "JUBLEE 25 SHOT", per: "1 Box", price: 1440 },
//             { id: 161, name: "CARNIVAL 50 SHOT", per: "1 Box", price: 1685 },
//             { id: 162, name: "HOLIWALI 50 SHOTS", per: "1 Box", price: 2601 },
//             { id: 163, name: "JAMAI 60 SHOTS/RUSH 60 SHOT", per: "1 Box", price: 3117 },
//             { id: 164, name: "GANGWAR 60 SHOTS", per: "1 Box", price: 3457 },
//             { id: 165, name: "BOSS KI MASS 100 SHOTS", per: "1 Box", price: 5220 },
//             { id: 166, name: "NIGHT RIDER 120 SHOTS", per: "1 Box", price: 6234 },
//             { id: 167, name: "ENJOY 240 SHOTS", per: "1 Box", price: 12478 },
//             { id: 168, name: "PYRO NIGHT 32 SHOTS", per: "1 Box", price: 11340 },
//             { id: 169, name: "PARADISE 20 SHOT", per: "1 Box", price: 7088 },
//             { id: 170, name: "TRIX SHOT (3*10)", per: "1 Box", price: 5859 },
//             { id: 171, name: "GREAT SHOW (10*10) (NEW)", per: "1 Box", price: 8505 },
//             { id: 172, name: "WONDERLA (16 SHOT) (NEW)", per: "1 Box", price: 15782 }
//         ]
//     },

//     {
//         name: "SPARKLERS",
//         products: [
//             { id: 173, name: "7 Cm Electric Sparklers", per: "1 Box", price: 23 },
//             { id: 174, name: "7 Cm Glittering Sparklers", per: "1 Box", price: 29 },
//             { id: 175, name: "7 Cm Green Sparklers", per: "1 Box", price: 34 },
//             { id: 176, name: "7 Cm Red Sparklers", per: "1 Box", price: 39 },
//             { id: 177, name: "7 Cm Filty-Flity Sparklers", per: "1 Box", price: 40 },
//             { id: 178, name: "10 Cm Electric Sparklers", per: "1 Box", price: 41 },
//             { id: 179, name: "10 Cm Glittering Sparklers", per: "1 Box", price: 43 },
//             { id: 180, name: "10 Cm Green Sparklers", per: "1 Box", price: 51 },
//             { id: 181, name: "10 Cm Red Sparklers", per: "1 Box", price: 54 },
//             { id: 182, name: "10 Cm Blue Sparklers", per: "1 Box", price: 57 },
//             { id: 183, name: "12 Cm Electric Sparklers", per: "1 Box", price: 66 },
//             { id: 184, name: "12 Cm Glittering Sparklers", per: "1 Box", price: 73 },
//             { id: 185, name: "12 Cm Green Sparklers", per: "1 Box", price: 80 },
//             { id: 186, name: "12 Cm Red Sparklers", per: "1 Box", price: 82 },
//             { id: 187, name: "12 Cm Silver Drops Sparklers", per: "1 Box", price: 92 },
//             { id: 188, name: "15 Cm Electric Sparklers", per: "1 Box", price: 113 },
//             { id: 189, name: "15 Cm Glittering Sparklers", per: "1 Box", price: 125 },
//             { id: 190, name: "15 Cm Green Sparklers", per: "1 Box", price: 142 },
//             { id: 191, name: "15 Cm Red Sparklers", per: "1 Box", price: 150 },
//             { id: 192, name: "30 Cm Electric Sparklers", per: "1 Box", price: 113 },
//             { id: 193, name: "30 Cm Glittering Sparklers", per: "1 Box", price: 125 },
//             { id: 194, name: "30 Cm Green Sparklers", per: "1 Box", price: 142 },
//             { id: 195, name: "30 Cm Red Sparklers", per: "1 Box", price: 150 },
//             { id: 196, name: "50 Cm Electric Sparklers", per: "1 Box", price: 392 },
//             { id: 197, name: "50 Cm Glittering Sparklers", per: "1 Box", price: 437 },
//             { id: 198, name: "70 Cm Electric Sparklers", per: "1 Box", price: 612 },
//             { id: 199, name: "70 Cm Glittering Sparklers", per: "1 Box", price: 659 },
//             { id: 200, name: "FIRE FLY (ROTATOR SPARKLERS)", per: "1 Box", price: 630 }
//         ]
//     },

//     {
//         name: "GIFT BOXES",
//         products: [
//             { id: 201, name: "JOLLY 16 ITEMS", price: 375, per: "1 Box", isFixedPrice: true },
//             { id: 202, name: "FANTASY 21 ITEMS", price: 475, per: "1 Box", isFixedPrice: true },
//             { id: 203, name: "ENJOY 25 ITEMS", price: 590, per: "1 Box", isFixedPrice: true },
//             { id: 204, name: "BEAUTY 30 ITEMS", price: 690, per: "1 Box", isFixedPrice: true },
//             { id: 205, name: "SHINY 35 ITEMS", price: 850, per: "1 Box", isFixedPrice: true },
//             { id: 206, name: "JAMMAI 40 ITEMS", price: 990, per: "1 Box", isFixedPrice: true },
//             { id: 207, name: "DISNEY 45 ITEMS", price: 1155, per: "1 Box", isFixedPrice: true },
//             { id: 208, name: "LUXURY 50 ITEMS", price: 1350, per: "1 Box", isFixedPrice: true },
//             { id: 209, name: "ROYAL GALAXY 60 ITEMS", price: 1560, per: "1 Box", isFixedPrice: true }
//         ]
//     },

//     {
//         name: "COLOUR MATCHES",
//         products: [
//             { id: 210, name: "MINI DELUXE", per: "1 Box", price: 91 },
//             { id: 211, name: "KODI BABA", per: "1 Box", price: 119 },
//             { id: 212, name: "MATRIX", per: "1 Box", price: 150 },
//             { id: 213, name: "PLUMBS", per: "1 Box", price: 272 },
//             { id: 214, name: "NOKIA", per: "1 Box", price: 511 },
//             { id: 215, name: "TASARA", per: "1 Box", price: 533 },
//             { id: 221, name: "ROLL CAP", per: "1 Box", price: 164 }
//         ]
//     }
// ];

const productGroups = [
    {
      name: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)",
      products: [
            { id: 1, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '3.5inch LAKSHMI (3.5 இன்ச் லட்சுமி)', per: "PKT", price: 75, offerRate: 15 },
      { id: 2, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '2.75inch KURUVI (2.75 இன்ச் குருவி)', per: "PKT", price: 50, offerRate: 10 },
      { id: 3, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '4inch LAKSHMI (4 இன்ச் லட்சுமி)', per: "PKT", price: 110, offerRate: 22 },
      { id: 4, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '4inch GOLD LAKSHMI (4 இன்ச் கோல்டு லட்சுமி)', per: "PKT", price: 120, offerRate: 24 },
      { id: 5, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '4inch DELUXE LAKSHMI (4 இன்ச் டீலக்ஸ் லட்சுமி)', per: "PKT", price: 180, offerRate: 36 },
      { id: 6, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '5inch LAKSHMI (5 இன்ச் லட்சுமி)', per: "PKT", price: 220, offerRate: 44 },
      { id: 7, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '6inch LAKSHMI (6 இன்ச் லட்சுமி)', per: "PKT", price: 250, offerRate: 50 }
      ]
    },
    {
      name: "SPARKLERS (மத்தாப்புகள்)",
      products: [
        { id: 8, category: "SPARKLERS (மத்தாப்புகள்)", name: "7CM Electric (7 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 65, offerRate: 13 },
        { id: 9, category: "SPARKLERS (மத்தாப்புகள்)", name: "7CM Crackling (7 செ.மீ சத்தம் தரும் மத்தாப்பு)", per: "BOX", price: 70, offerRate: 14 },
        { id: 10, category: "SPARKLERS (மத்தாப்புகள்)", name: "7CM Green (7 செ.மீ பச்சை மத்தாப்பு)", per: "BOX", price: 80, offerRate: 16 },
        { id: 11, category: "SPARKLERS (மத்தாப்புகள்)", name: "7CM Red (7 செ.மீ சிவப்பு மத்தாப்பு)", per: "BOX", price: 95, offerRate: 19 },
        { id: 12, category: "SPARKLERS (மத்தாப்புகள்)", name: "10CM Electric (10 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 115, offerRate: 23 },
        { id: 13, category: "SPARKLERS (மத்தாப்புகள்)", name: "10CM Crackling (10 செ.மீ சத்தம் தரும் மத்தாப்பு)", per: "BOX", price: 130, offerRate: 26 },
        { id: 14, category: "SPARKLERS (மத்தாப்புகள்)", name: "10CM Green (10 செ.மீ பச்சை மத்தாப்பு)", per: "BOX", price: 136, offerRate: 27 },
        { id: 15, category: "SPARKLERS (மத்தாப்புகள்)", name: "10CM Red (10 செ.மீ சிவப்பு மத்தாப்பு)", per: "BOX", price: 146, offerRate: 29 },
        { id: 16, category: "SPARKLERS (மத்தாப்புகள்)", name: "15CM Electric (15 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 240, offerRate: 48 },
        { id: 17, category: "SPARKLERS (மத்தாப்புகள்)", name: "15CM Crackling (15 செ.மீ சத்தம் தரும் மத்தாப்பு)", per: "BOX", price: 250, offerRate: 50 },
        { id: 18, category: "SPARKLERS (மத்தாப்புகள்)", name: "15CM Green (15 செ.மீ பச்சை மத்தாப்பு)", per: "BOX", price: 280, offerRate: 56 },
        { id: 19, category: "SPARKLERS (மத்தாப்புகள்)", name: "15CM Red (15 செ.மீ சிவப்பு மத்தாப்பு)", per: "BOX", price: 300, offerRate: 60 },
        { id: 20, category: "SPARKLERS (மத்தாப்புகள்)", name: "30CM Electric (30 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 240, offerRate: 48 },
        { id: 21, category: "SPARKLERS (மத்தாப்புகள்)", name: "30CM Crackling (30 செ.மீ சத்தம் தரும் மத்தாப்பு)", per: "BOX", price: 250, offerRate: 50 },
        { id: 22, category: "SPARKLERS (மத்தாப்புகள்)", name: "30CM Green (30 செ.மீ பச்சை மத்தாப்பு)", per: "BOX", price: 280, offerRate: 56 },
        { id: 23, category: "SPARKLERS (மத்தாப்புகள்)", name: "30CM Red (30 செ.மீ சிவப்பு மத்தாப்பு)", per: "BOX", price: 300, offerRate: 60 },
        { id: 24, category: "SPARKLERS (மத்தாப்புகள்)", name: "50CM Electric (50 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 1100, offerRate: 220 }
      ]
    },
    {
      name: "SPECIAL SPARKLERS (சிறப்பு மத்தாப்புகள்)",
      products: [
        { id: 25, category: "SPECIAL SPARKLERS (சிறப்பு மத்தாப்புகள்)", name: "ROTATING SPARKLERS (சுழலும் மத்தாப்புகள்)", per: "BOX", price: 1250, offerRate: 250 }
      ]
    },
    {
      name: "BOMBS (வெடிகள்)",
      products: [
        { id: 26, category: "BOMBS (வெடிகள்)", name: "HYDRO (ஹைட்ரோ வெடி)", per: "BOX", price: 425, offerRate: 85 },
      { id: 27, category: "BOMBS (வெடிகள்)", name: "KING (கிங் வெடி)", per: "BOX", price: 500, offerRate: 100 },
      { id: 28, category: "BOMBS (வெடிகள்)", name: "CLASSIC (கிளாசிக் வெடி)", per: "BOX", price: 625, offerRate: 125 },
      { id: 29, category: "BOMBS (வெடிகள்)", name: "AGNI/DIGITAL BOMB (அக்னி / டிஜிட்டல் வெடி)", per: "BOX", price: 1250, offerRate: 250 },
      ]
    },
    {
      name: "BIJILI (பிஜிலி வெடிகள்)",
      products: [
       { id: 30, category: "BIJILI (பிஜிலி வெடிகள்)", name: "RED BIJILI (சிவப்பு பிஜிலி)", per: "PKT", price: 200, offerRate: 40 },
      { id: 31, category: "BIJILI (பிஜிலி வெடிகள்)", name: "STRIPPED BIJILI (ஸ்ட்ரிப்ப்ட் பிஜிலி)", per: "PKT", price: 220, offerRate: 44 }
      ]
    },
    {
      name: "PAPER BOMB (பேப்பர் வெடிகள்)",
      products: [
         { id: 32, category: "PAPER BOMB (பேப்பர் வெடிகள்)", name: "1/4 KG ADIYAL (கால் கிலோ அடியல்)", per: "BOX", price: 250, offerRate: 50 },
      { id: 33, category: "PAPER BOMB (பேப்பர் வெடிகள்)", name: "1/2 KG ADIYAL (அரை கிலோ அடியல்)", per: "BOX", price: 500, offerRate: 100 },
      { id: 34, category: "PAPER BOMB (பேப்பர் வெடிகள்)", name: "1 KG ADIYAL (ஒரு கிலோ அடியல்)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 35, category: "PAPER BOMB (பேப்பர் வெடிகள்)", name: "MONEY BANK PAPER BOMB (மணி பேங்க் பேப்பர் வெடி)", per: "BOX", price: 700, offerRate: 140 }
      ]
    },
    {
      name: "FLOWER POTS (பூந்தொட்டிகள்)",
      products: [
        { id: 36, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS BIG (A GRADE) (பெரிய பூந்தொட்டி A தரம்)", per: "BOX", price: 450, offerRate: 90 },
      { id: 37, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS BIG (B GRADE) (பெரிய பூந்தொட்டி B தரம்)", per: "BOX", price: 350, offerRate: 70 },
      { id: 38, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS SPECIAL (A GRADE) (சிறப்பு பூந்தொட்டி A தரம்)", per: "BOX", price: 550, offerRate: 110 },
      { id: 39, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS SPECIAL (B GRADE) (சிறப்பு பூந்தொட்டி B தரம்)", per: "BOX", price: 450, offerRate: 90 },
      { id: 40, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS ASOKA (A GRADE) (அசோகா பூந்தொட்டி A தரம்)", per: "BOX", price: 850, offerRate: 170 },
      { id: 41, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS ASOKA (B GRADE) (அசோகா பூந்தொட்டி B தரம்)", per: "BOX", price: 650, offerRate: 130 },
      { id: 42, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "COLOR KOTTI (A GRADE) (கலர் கொட்டி A தரம்)", per: "BOX", price: 1260, offerRate: 252 },
      { id: 43, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "COLOR KOTTI (B GRADE) (கலர் கொட்டி B தரம்)", per: "BOX", price: 1100, offerRate: 220 },
      { id: 44, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "COLOR KOTTI MEGA (மெகா கலர் கொட்டி)", per: "BOX", price: 1375, offerRate: 275 },
      { id: 45, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS DELUXE (5 PCS) (டீலக்ஸ் பூந்தொட்டி 5 துண்டுகள்)", per: "BOX", price: 1300, offerRate: 260 },
      { id: 46, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "LUCKY (RED & GREEN) (லக்கி சிவப்பு மற்றும் பச்சை)", per: "BOX", price: 950, offerRate: 190 }
      ]
    },
    {
      name: "GROUND CHAKKARS (தரையில் சுழலும் சக்கரங்கள்)",
      products: [
       { id: 47, category: "GROUND CHAKKARS (தரையில் சுழலும் சக்கரங்கள்)", name: "GROUND CHAKKAR BIG (பெரிய தரைச் சக்கரம்)", per: "BOX", price: 270, offerRate: 54 },
      { id: 48, category: "GROUND CHAKKARS (தரையில் சுழலும் சக்கரங்கள்)", name: "GROUND CHAKKAR SPECIAL (சிறப்பு தரைச் சக்கரம்)", per: "BOX", price: 460, offerRate: 92 },
      { id: 49, category: "GROUND CHAKKARS (தரையில் சுழலும் சக்கரங்கள்)", name: "GROUND CHAKKAR DELUXE (டீலக்ஸ் தரைச் சக்கரம்)", per: "BOX", price: 720, offerRate: 144 }
      ]
    },
    {
      name: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)",
      products: [
         { id: 50, category: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)", name: "4X4 (4x4 ஃபேன்சி சக்கரம்)", per: "BOX", price: 800, offerRate: 160 },
      { id: 51, category: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)", name: "WHISTLING CHAKKAR (விசில் சக்கரம்)", per: "BOX", price: 600, offerRate: 120 },
      { id: 52, category: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)", name: "PLANET WHEELING (பிளானெட் வீலிங் சக்கரம்)", per: "BOX", price: 1750, offerRate: 350 },
      { id: 53, category: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)", name: "NINJA CHAKKAR AYYAN (நிஞ்ஜா அய்யன் சக்கரம்)", per: "BOX", price: 850, offerRate: 170 }
      ]
    },
    {
      name: "TWINKLING STARS (மின்னும் நட்சத்திரங்கள்)",
      products: [
       { id: 54, category: "TWINKLING STARS (மின்னும் நட்சத்திரங்கள்)", name: '1.5inch TW STAR (1.5 இன்ச் ட்விங்கிள் ஸ்டார்)', per: "BOX", price: 150, offerRate: 30 },
      { id: 55, category: "TWINKLING STARS (மின்னும் நட்சத்திரங்கள்)", name: '4inch TW STAR (4 இன்ச் ட்விங்கிள் ஸ்டார்)', per: "BOX", price: 400, offerRate: 80 }
      ]
    },
    {
      name: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)",
      products: [
        { id: 56, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "PHOTO FLASH (போட்டோ ஃபிளாஷ்)", per: "BOX", price: 500, offerRate: 100 },
      { id: 57, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "BAMBARAM (பம்பரம்)", per: "BOX", price: 550, offerRate: 110 },
      { id: 58, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "BUTTERFLY (பட்டாம்பூச்சி)", per: "BOX", price: 500, offerRate: 100 },
      { id: 59, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "KITKAT (கிட்கேட்)", per: "BOX", price: 200, offerRate: 40 },
      { id: 60, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "MAGIC POPS (மேஜிக் பாப்ஸ்)", per: "BOX", price: 150, offerRate: 30 },
      { id: 61, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "CARTOONS (கார்ட்டூன்ஸ்)", per: "BOX", price: 150, offerRate: 30 },
      { id: 62, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "SNAKE TABLETS (பாம்பு மாத்திரைகள்)", per: "BOX", price: 150, offerRate: 30 }
      ]
    },
    {
      name: "SMOKE CRACKERS (புகை பட்டாசுகள்)",
      products: [
        { id: 63, category: "SMOKE CRACKERS (புகை பட்டாசுகள்)", name: "RAINBOW SMOKE (ரெயின்போ புகை)", per: "BOX", price: 550, offerRate: 110 },
      { id: 64, category: "SMOKE CRACKERS (புகை பட்டாசுகள்)", name: '4inch HOLI SMOKE (4 இன்ச் ஹோலி புகை)', per: "BOX", price: 1000, offerRate: 200 },
      { id: 65, category: "SMOKE CRACKERS (புகை பட்டாசுகள்)", name: "PEACOCK SMOKE (மயில் புகை)", per: "BOX", price: 1250, offerRate: 250 },
      { id: 66, category: "SMOKE CRACKERS (புகை பட்டாசுகள்)", name: "15 SHOT SKY SMOKE SHOT (15 ஷாட் வானப் புகை)", per: "BOX", price: 2750, offerRate: 550 }
      ]
    },
    {
      name: "FANCY CANDLES & PENCILS  (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)",
      products: [
        { id: 67, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "POPCORN CANDLES (பாப்கார்ன் மெழுகுவர்த்தி)", per: "BOX", price: 1350, offerRate: 270 },
      { id: 68, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "WATERFALL CANDLES (நீர்வீழ்ச்சி மெழுகுவர்த்தி)", per: "BOX", price: 1350, offerRate: 270 },
      { id: 69, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "SWORD (வாள்)", per: "BOX", price: 600, offerRate: 120 },
      { id: 70, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "BAT (பேட்)", per: "BOX", price: 1300, offerRate: 260 },
      { id: 71, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "VELLUM MAYILUM (வேலும் மயிலும்)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 72, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "LOLLI POP (லாலிபாப்)", per: "BOX", price: 800, offerRate: 160 },
      { id: 73, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "SELFIE STICKS (செல்ஃபி ஸ்டிக்ஸ்)", per: "BOX", price: 850, offerRate: 170 }
      ]
    },
    {
      name: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)",
      products: [
         { id: 74, category: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)", name: "HELICOPTER (ஹெலிகாப்டர்)", per: "BOX", price: 550, offerRate: 110 },
      { id: 75, category: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)", name: "DRONE (ட்ரோன்)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 76, category: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)", name: "LUNIK ROCKET (லூனிக் ராக்கெட்)", per: "BOX", price: 600, offerRate: 120 },
      { id: 77, category: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)", name: "WHISTLING ROCKET (விசில் ராக்கெட்)", per: "BOX", price: 750, offerRate: 150 }
      ]
    },
    {
      name: "SIREN FOUNTAIN (சைரன் நீரூற்று)",
      products: [
        { id: 78, category: "SIREN FOUNTAIN (சைரன் நீரூற்று)", name: "MINI SIREN (மினி சைரன்)", per: "BOX", price: 875, offerRate: 175 },
      { id: 79, category: "SIREN FOUNTAIN (சைரன் நீரூற்று)", name: "MEGA SIREN 3PCS (மெகா சைரன் 3 துண்டுகள்)", per: "BOX", price: 1125, offerRate: 225 }
      ]
    },
    {
      name: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)",
      products: [
        { id: 80, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "DISCO SHOWER (டிஸ்கோ ஷவர்)", per: "BOX", price: 625, offerRate: 125 },
      { id: 81, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "COLOUR RAIN (வண்ண மழை)", per: "BOX", price: 625, offerRate: 125 },
      { id: 82, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "SILVER RAIN (வெள்ளி மழை)", per: "BOX", price: 625, offerRate: 125 },
      { id: 83, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "GOLDEN SPARROW (தங்கச் சிட்டுக்குருவி)", per: "BOX", price: 625, offerRate: 125 },
      { id: 84, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "PEACOCK FEATHER (மயில் இறகு)", per: "BOX", price: 725, offerRate: 145 },
      { id: 85, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "TRICOLOR FOUNTAIN (மூவர்ண நீரூற்று)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 86, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "GOLD FEAST (2 COLOURS) (தங்க விருந்து 2 நிறங்கள்)", per: "BOX", price: 1225, offerRate: 245 },
      { id: 87, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "TWIN TONE (2 COLOURS) (இரட்டை நிறம்)", per: "BOX", price: 1225, offerRate: 245 },
      { id: 88, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "TROLLS (2 COLOURS) (ட்ரோல்ஸ் 2 நிறங்கள்)", per: "BOX", price: 1225, offerRate: 245 },
      { id: 89, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "KING FISH (2 COLOURS) (கிங் ஃபிஷ் 2 நிறங்கள்)", per: "BOX", price: 1225, offerRate: 245 }
      ]
    },
    {
      name: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)",
      products: [
        { id: 90, category: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)", name: "LITTLE DOVE (சிறிய புறா)", per: "BOX", price: 425, offerRate: 85 },
      { id: 91, category: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)", name: "NANO FOUNTAIN (நானோ நீரூற்று)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 92, category: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)", name: "SUPER STAR (சூப்பர் ஸ்டார்)", per: "BOX", price: 925, offerRate: 185 },
      { id: 93, category: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)", name: "LEMON TREE (லெமன் ட்ரீ)", per: "BOX", price: 925, offerRate: 185 }
      ]
    },
    {
      name: "MEGA FANCY SHOWERS (மெகா ஃபேன்சி ஷவர்ஸ்)",
      products: [
        { id: 94, category: "MEGA FANCY SHOWERS (மெகா ஃபேன்சி ஷவர்ஸ்)", name: "BUNNY AYYAN BRAND (பன்னி அய்யன் பிராண்ட்)", per: "BOX", price: 3300, offerRate: 660 },
      { id: 95, category: "MEGA FANCY SHOWERS (மெகா ஃபேன்சி ஷவர்ஸ்)", name: "VOLCANO (எரிமலை)", per: "BOX", price: 2000, offerRate: 400 }
      ]
    },
    {
      name: "TIN SHOWERS (டின் ஷவர்ஸ்)",
      products: [
        { id: 96, category: "TIN SHOWERS (டின் ஷவர்ஸ்)", name: '4inch TIN SHOWER (4 இன்ச் டின் ஷவர்)', per: "BOX", price: 600, offerRate: 120 },
      { id: 97, category: "TIN SHOWERS (டின் ஷவர்ஸ்)", name: '6inch TIN SHOWER (6 இன்ச் டின் ஷவர்)', per: "BOX", price: 800, offerRate: 160 },
      { id: 98, category: "TIN SHOWERS (டின் ஷவர்ஸ்)", name: "JOLLY BOBBY (ஜாலி பாபி)", per: "BOX", price: 1100, offerRate: 220 }
      ]
    },
    {
      name: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)",
      products: [
        { id: 99, category: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)", name: "TIMMY TOMMY (டிம்மி டாமி)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 100, category: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)", name: "JOLU BOLU (ஜோலு போலு)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 101, category: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)", name: "JUBLY BUBLY (ஜூப்ளி பப்ளி)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 102, category: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)", name: "RAIN SHINE (ரெயின் ஷைன்)", per: "BOX", price: 1500, offerRate: 300 }
      ]
    },
    {
      name: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)",
      products: [
         { id: 103, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '0.75inch PENTA (5 PCS) (0.75 இன்ச் பென்டா 5 துண்டுகள்)', per: "BOX", price: 1100, offerRate: 220 },
      { id: 104, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '0.75inch MOJO CRACKLING (5 PCS) (0.75 இன்ச் மோஜோ கிராக்கிளிங் 5 துண்டுகள்)', per: "BOX", price: 1675, offerRate: 335 },
      { id: 105, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '1inch CHOTTA FANCY (1 இன்ச் சோட்டா ஃபேன்சி)', per: "BOX", price: 200, offerRate: 40 },
      { id: 106, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2inch FANCY (1PC) - A GRADE (2 இன்ச் ஃபேன்சி A தரம், 1 துண்டு)', per: "BOX", price: 700, offerRate: 140 },
      { id: 107, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2inch FANCY (1PC) - B GRADE (2 இன்ச் ஃபேன்சி B தரம், 1 துண்டு)', per: "BOX", price: 550, offerRate: 110 },
      { id: 108, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2inch FANCY (3PCS) - A GRADE (2 இன்ச் ஃபேன்சி A தரம், 3 துண்டுகள்)', per: "BOX", price: 1650, offerRate: 330 },
      { id: 109, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2inch FANCY (3PCS) - B GRADE (2 இன்ச் ஃபேன்சி B தரம், 3 துண்டுகள்)', per: "BOX", price: 1250, offerRate: 250 },
      { id: 110, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2.5inch FANCY (3 STEPS) (2.5 இன்ச் ஃபேன்சி 3 படிகள்)', per: "BOX", price: 1500, offerRate: 300 },
      { id: 111, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '3.5inch FANCY A GRADE (3.5 இன்ச் ஃபேன்சி A தரம்)', per: "BOX", price: 1600, offerRate: 320 },
      { id: 112, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '3.5inch FANCY B GRADE (3.5 இன்ச் ஃபேன்சி B தரம்)', per: "BOX", price: 1350, offerRate: 270 },
      { id: 113, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '4inch FANCY (4 இன்ச் ஃபேன்சி)', per: "BOX", price: 1750, offerRate: 350 },
      { id: 114, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '4inch FANCY DOUBLE BALL (4 இன்ச் ஃபேன்சி டபுள் பால்)', per: "BOX", price: 2600, offerRate: 520 },
      { id: 115, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '5inch FANCY (5 இன்ச் ஃபேன்சி)', per: "BOX", price: 5000, offerRate: 1000 }
      ]
    },
    {
        name: "PEACOCK FOUNTAINS",
        products: [
          { id: 116, category: "PEACOCK FOUNTAINS", name: "MAGIC PEACOCK", per: "BOX", price: 950, offerRate: 190 },
        { id: 117, category: "PEACOCK FOUNTAINS", name: "BADA PEACOCK", per: "BOX", price: 2700, offerRate: 540 }
        ]
      },
    {
      name: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)",
      products: [
        { id: 118, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "12 SHOTS RIDER (12 ஷாட்ஸ் ரைடர்)", per: "BOX", price: 725, offerRate: 145 },
      { id: 119, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "12 SHOTS MULTICOLOUR (12 ஷாட்ஸ் பல வண்ணங்கள்)", per: "BOX", price: 1100, offerRate: 220 },
      { id: 120, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "15 SHOTS MULTICOLOUR (15 ஷாட்ஸ் பல வண்ணங்கள்)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 121, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "25 SHOTS RIDER (25 ஷாட்ஸ் ரைடர்)", per: "BOX", price: 1100, offerRate: 220 },
      { id: 122, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "30 SHOTS MULTICOLOUR A GRADE (30 ஷாட்ஸ் பல வண்ணங்கள் A தரம்)", per: "BOX", price: 2750, offerRate: 550 },
      { id: 123, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "30 SHOTS MULTICOLOUR B GRADE (30 ஷாட்ஸ் பல வண்ணங்கள் B தரம்)", per: "BOX", price: 2250, offerRate: 450 },
      { id: 124, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "60 SHOTS MULTICOLOUR A GRADE (60 ஷாட்ஸ் பல வண்ணங்கள் A தரம்)", per: "BOX", price: 5500, offerRate: 1100 },
      { id: 125, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "60 SHOTS MULTICOLOUR B GRADE (60 ஷாட்ஸ் பல வண்ணங்கள் B தரம்)", per: "BOX", price: 4500, offerRate: 900 },
      { id: 126, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "120 SHOTS A GRADE (120 ஷாட்ஸ் A தரம்)", per: "BOX", price: 11000, offerRate: 2200 },
      { id: 127, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "120 SHOTS B GRADE (120 ஷாட்ஸ் B தரம்)", per: "BOX", price: 9000, offerRate: 1800 },
      { id: 128, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "240 SHOTS (240 ஷாட்ஸ்)", per: "BOX", price: 22000, offerRate: 4400 }
      ]
    },
    {
      name: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)",
      products: [
         { id: 129, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "6 SHOTS LOVE DOVE (6 ஷாட்ஸ் லவ் டவ்)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 130, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "10 SHOTS WITH SKY CHAKKAR (10 ஷாட்ஸ் வானச் சக்கரத்துடன்)", per: "BOX", price: 1400, offerRate: 280 },
      { id: 131, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "30 SHOTS PEACOCK DANCE (30 ஷாட்ஸ் மயில் நடனம்)", per: "BOX", price: 0, offerRate: 0 },
      { id: 132, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "5 X 10 (50 SHOTS) (5 x 10, மொத்தம் 50 ஷாட்ஸ்)", per: "BOX", price: 12500, offerRate: 2500 },
      { id: 133, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "10 X 10 (100 SHOTS) (10 x 10, மொத்தம் 100 ஷாட்ஸ்)", per: "BOX", price: 25000, offerRate: 5000 },
      { id: 134, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "GUN SHOOTER (கன் ஷூட்டர்)", per: "BOX", price: 2750, offerRate: 550 }
      ]
    },
    {
      name: "ROLL CAPS & GUNS (ரோல் கேப்ஸ் மற்றும் துப்பாக்கிகள்)",
      products: [
         { id: 135, category: "ROLL CAPS & GUNS (ரோல் கேப்ஸ் மற்றும் துப்பாக்கிகள்)", name: "ROLL CAPS (ரோல் கேப்ஸ்)", per: null, price: 500, offerRate: 100 },
      { id: 136, category: "ROLL CAPS & GUNS (ரோல் கேப்ஸ் மற்றும் துப்பாக்கிகள்)", name: "GUN (துப்பாக்கி)", per: null, price: 600, offerRate: 120 }
      ]
    },
    {
      name: "COLOUR MATCHES (வண்ண தீப்பெட்டிகள்)",
      products: [
         { id: 137, category: "COLOUR MATCHES (வண்ண தீப்பெட்டிகள்)", name: "3IN1 SMALL MATCHES (3 இன் 1 சிறிய தீப்பெட்டி)", per: "BOX", price: 175, offerRate: 35 },
      { id: 138, category: "COLOUR MATCHES (வண்ண தீப்பெட்டிகள்)", name: "ROYAL 10 IN 1 MEGA MATCHES (ராயல் 10 இன் 1 மெகா தீப்பெட்டி)", per: "BOX", price: 1300, offerRate: 260 }
      ]
    },
    {
      name: "MUSICAL MULTI SHOTS (இசை மல்டி ஷாட்ஸ்)",
      products: [
        { id: 139, category: "MUSICAL MULTI SHOTS (இசை மல்டி ஷாட்ஸ்)", name: "12 SINGING BIRD MUSICAL SHOTS (12 பாடும் பறவை இசை ஷாட்ஸ்)", per: "BOX", price: 2750, offerRate: 550 },
      { id: 140, category: "MUSICAL MULTI SHOTS (இசை மல்டி ஷாட்ஸ்)", name: "25 SINGING BIRD MUSICAL SHOTS (25 பாடும் பறவை இசை ஷாட்ஸ்)", per: "BOX", price: 5500, offerRate: 1100 },
      { id: 141, category: "MUSICAL MULTI SHOTS (இசை மல்டி ஷாட்ஸ்)", name: "WHISTLE READY (விசில் ரெடி)", per: "BOX", price: 0, offerRate: 0 }
      ]
    },
    {
      name: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)",
      products: [
           { id: 142, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "CRACKLING EXPRESS 100 (கிராக்கிளிங் எக்ஸ்பிரஸ் 100)", per: "BOX", price: 300, offerRate: 60 },
      { id: 143, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "LEGEND 200 (லெஜெண்ட் 200)", per: "BOX", price: 575, offerRate: 115 },
      { id: 144, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "1K A (1K A)", per: "BOX", price: 1650, offerRate: 330 },
      { id: 145, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "1K B (1K B)", per: "BOX", price: 1125, offerRate: 225 },
      { id: 146, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "5K A (5K A)", per: "BOX", price: 8250, offerRate: 1650 },
      { id: 147, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "5K B (5K B)", per: "BOX", price: 5550, offerRate: 1110 }
      ]
    },
    {
      name: "NEW ARRIVALS FANCY (புதிய ஃபேன்சி வரவுகள்)",
      products: [
        { id: 148, category: "NEW ARRIVALS FANCY (புதிய ஃபேன்சி வரவுகள்)", name: '4inch FANCY PIPE NIAGARA (4 இன்ச் ஃபேன்சி பைப் நயாகரா)', per: null, price: 2750, offerRate: 550 },
      { id: 149, category: "NEW ARRIVALS FANCY (புதிய ஃபேன்சி வரவுகள்)", name: "GANG BANG 16 SHOTS SPECIAL FUNCTION (கேங் பேங் 16 ஷாட்ஸ் ஸ்பெஷல் ஃபங்ஷன்)", per: null, price: 15000, offerRate: 3000 }
      ]
    },
    {
      name: "MOUNTAIN FOUNTAIN (மலை நீரூற்று)",
      products: [
         { id: 150, category: "MOUNTAIN FOUNTAIN (மலை நீரூற்று)", name: "MOUNT VALCANO RED (மவுண்ட் வால்கானோ சிவப்பு)", per: "BOX", price: 835, offerRate: 167 },
      { id: 151, category: "MOUNTAIN FOUNTAIN (மலை நீரூற்று)", name: "MOUNT EVEREST WHITE (மவுண்ட் எவரெஸ்ட் வெள்ளை)", per: "BOX", price: 835, offerRate: 167 },
      { id: 152, category: "MOUNTAIN FOUNTAIN (மலை நீரூற்று)", name: "MOUNT LANTER GREEN (மவுண்ட் லான்டர் பச்சை)", per: "BOX", price: 835, offerRate: 167 }
      ]
    },
    {
      name: "POWER PUFF GIRLS FOUNTAIN (பவர் பஃப் கேர்ள்ஸ் நீரூற்று)",
      products: [
          { id: 153, category: "POWER PUFF GIRLS FOUNTAIN (பவர் பஃப் கேர்ள்ஸ் நீரூற்று)", name: "POWER PUFF GIRLS RED (பவர் பஃப் கேர்ள்ஸ் சிவப்பு)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 154, category: "POWER PUFF GIRLS FOUNTAIN (பவர் பஃப் கேர்ள்ஸ் நீரூற்று)", name: "POWER PUFF GIRLS GREEN (பவர் பஃப் கேர்ள்ஸ் பச்சை)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 155, category: "POWER PUFF GIRLS FOUNTAIN (பவர் பஃப் கேர்ள்ஸ் நீரூற்று)", name: "POWER PUFF GIRLS WHITE (பவர் பஃப் கேர்ள்ஸ் வெள்ளை)", per: "BOX", price: 1000, offerRate: 200 }
      ]
    },
    {
      name: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)",
      products: [
         { id: 156, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "GIFT BOX 25 ITEMS (NET RATE) (25 பொருட்கள் கிஃப்ட் பாக்ஸ், நிகர விலை)", per: "BOX", price: 0, offerRate: 500 },
      { id: 157, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "GIFT BOX 35 ITEMS (NET RATE) (35 பொருட்கள் கிஃப்ட் பாக்ஸ், நிகர விலை)", per: "BOX", price: 0, offerRate: 750 },
      { id: 158, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "GIFT BOX 50 ITEMS (NET RATE) (50 பொருட்கள் கிஃப்ட் பாக்ஸ், நிகர விலை)", per: "BOX", price: 0, offerRate: 1000 },
      { id: 159, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "COMBO BACK A (காம்போ பேக் A)", per: "BOX", price: 0, offerRate: 3000 },
      { id: 160, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "COMBO BACK B (காம்போ பேக் B)", per: "BOX", price: 0, offerRate: 5000 },
      { id: 161, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "COMBO BACK C (காம்போ பேக் C)", per: "BOX", price: 0, offerRate: 10000 }
      ]
    },
  ];
const CUSTOMER_DISCOUNT_RATE = 0.5;
const SHOWCASE_DISCOUNT_RATE = 0.8;
const MIN_ORDER_OFFER_AMOUNT = 3000;

const customerOfferRate = 1 - CUSTOMER_DISCOUNT_RATE;
const showcaseOriginalRate = 1 - SHOWCASE_DISCOUNT_RATE;

const accordion = document.getElementById("productAccordion");
const productCountEl = document.getElementById("productCount");
const totalDiscountEl = document.getElementById("totalDiscount");
const grandTotalEl = document.getElementById("grandTotal");
const grandOfferTotalEl = document.getElementById("grandOfferTotal");

const selectionScreen = document.getElementById("selectionScreen");
const reviewScreen = document.getElementById("reviewScreen");
const invoiceScreen = document.getElementById("invoiceScreen");

const reviewTableBody = document.getElementById("reviewTableBody");
const invoiceTableBody = document.getElementById("invoiceTableBody");
const reviewEmptyState = document.getElementById("reviewEmptyState");
const minimumOrderMessage = document.getElementById("minimumOrderMessage");
const customerFormMessage = document.getElementById("customerFormMessage");
const minimumOrderBannerEl = document.querySelector(".minimum-order-banner");
const orderProgressBarEl = document.getElementById("orderProgressBar");
const orderProgressTextEl = document.getElementById("orderProgressText");
const orderTargetCardEl = document.getElementById("orderTargetCard");
const orderTargetAmountEl = document.getElementById("orderTargetAmount");
const productSearchEl = document.getElementById("productSearch");
const groupFilterEl = document.getElementById("groupFilter");
const catalogEmptyStateEl = document.getElementById("catalogEmptyState");
const mobileMiniCartEl = document.getElementById("mobileMiniCart");
const miniCartItemCountEl = document.getElementById("miniCartItemCount");
const miniCartQuantityEl = document.getElementById("miniCartQuantity");
const miniCartDiscountEl = document.getElementById("miniCartDiscount");
const miniCartGrandTotalEl = document.getElementById("miniCartGrandTotal");
const miniCartOfferTotalEl = document.getElementById("miniCartOfferTotal");
const miniCartResetButton = document.getElementById("miniCartResetButton");
const miniCartReviewButton = document.getElementById("miniCartReviewButton");
const downloadToastEl = document.getElementById("downloadToast");
const webResetButtons = document.querySelectorAll(".reset-session-button");

const reviewButton = document.getElementById("reviewButton");
const backButton = document.getElementById("backButton");
const invoiceButton = document.getElementById("invoiceButton");
const invoiceBackButton = document.getElementById("invoiceBackButton");
const printButton = document.getElementById("printButton");

const invoiceDateEl = document.getElementById("invoiceDate");
const invoiceNumberEl = document.getElementById("invoiceNumber");
const reviewProductCountEl = document.getElementById("reviewProductCount");
const reviewTotalQuantityEl = document.getElementById("reviewTotalQuantity");
const reviewGrandTotalEl = document.getElementById("reviewGrandTotal");
const reviewGrandOfferTotalEl = document.getElementById("reviewGrandOfferTotal");
const invoiceProductCountEl = document.getElementById("invoiceProductCount");
const invoiceTotalQuantityEl = document.getElementById("invoiceTotalQuantity");
const invoiceGrandTotalEl = document.getElementById("invoiceGrandTotal");
const invoiceGrandOfferTotalEl = document.getElementById("invoiceGrandOfferTotal");
const customerNameEl = document.getElementById("customerName");
const customerPhoneEl = document.getElementById("customerPhone");
const customerAddressEl = document.getElementById("customerAddress");
const customerNameErrorEl = document.getElementById("customerNameError");
const customerPhoneErrorEl = document.getElementById("customerPhoneError");
const customerAddressErrorEl = document.getElementById("customerAddressError");
const invoiceCustomerNameEl = document.getElementById("invoiceCustomerName");
const invoiceCustomerPhoneEl = document.getElementById("invoiceCustomerPhone");
const invoiceCustomerAddressEl = document.getElementById("invoiceCustomerAddress");
const screens = [selectionScreen, reviewScreen, invoiceScreen];
const groupDisplayMeta = {
    Electronics: { icon: "E", theme: "electronics" },
    "Computer Peripherals": { icon: "P", theme: "peripherals" },
    Accessories: { icon: "A", theme: "accessories" },
    "Gift Boxes": { icon: "G", theme: "gift-boxes" }
};
const QUANTITY_STORAGE_KEY = "novamart.quantities";
const CUSTOMER_STORAGE_KEY = "novamart.customer.details";
const APP_VERSION = "1.1.0";
const JSPDF_LIBRARY_URL = "jspdf.umd.min.js";
const JSPDF_AUTOTABLE_LIBRARY_URL = "jspdf.plugin.autotable.min.js";

const products = productGroups.flatMap((group) => group.products);
const productGroupById = new Map();
const quantityState = new Map(products.map((product) => [product.id, 0]));
let downloadToastTimer = null;
let jsPdfLoaderPromise = null;

const productImageModal = document.getElementById("productImageModal");
const productImageModalContent = document.getElementById("productImageModalContent");
const productImageModalCaption = document.getElementById("productImageModalCaption");
const imageModalClose = productImageModal.querySelector(".image-modal-close");

document.addEventListener("click", (event) => {
    const imageButton = event.target.closest(".product-image-button");

    if (imageButton && !imageButton.classList.contains("image-missing")) {
        productImageModalContent.src = imageButton.dataset.imageSrc;
        productImageModalContent.alt = imageButton.dataset.imageName;
        productImageModalCaption.textContent = imageButton.dataset.imageName;
        productImageModal.hidden = false;
        document.body.classList.add("image-modal-open");
    }
});

function closeProductImageModal() {
    productImageModal.hidden = true;
    productImageModalContent.src = "";
    document.body.classList.remove("image-modal-open");
}

imageModalClose.addEventListener("click", closeProductImageModal);

productImageModal.addEventListener("click", (event) => {
    if (event.target === productImageModal) {
        closeProductImageModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !productImageModal.hidden) {
        closeProductImageModal();
    }
});

productGroups.forEach((group) => {
    group.products.forEach((product) => {
        productGroupById.set(product.id, group.name);
    });
});

function formatAmount(value) {
    return value.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function loadStoredJson(storageKey) {
    try {
        const rawValue = localStorage.getItem(storageKey);
        return rawValue ? JSON.parse(rawValue) : null;
    } catch {
        return null;
    }
}

function saveStoredJson(storageKey, value) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(value));
    } catch {
        // Ignore storage quota or privacy-mode write failures.
    }
}

function persistQuantities() {
    saveStoredJson(QUANTITY_STORAGE_KEY, Object.fromEntries(quantityState));
}

function persistCustomerDetails() {
    saveStoredJson(CUSTOMER_STORAGE_KEY, getCustomerDetails());
}

function clearStoredSession() {
    try {
        localStorage.removeItem(QUANTITY_STORAGE_KEY);
        localStorage.removeItem(CUSTOMER_STORAGE_KEY);
    } catch {
        // Ignore storage clear failures.
    }
}

function restoreQuantities() {
    const storedQuantities = loadStoredJson(QUANTITY_STORAGE_KEY);
    if (!storedQuantities || typeof storedQuantities !== "object") {
        return;
    }

    products.forEach((product) => {
        const storedValue = Number(storedQuantities[product.id]);
        if (Number.isFinite(storedValue) && storedValue >= 0) {
            quantityState.set(product.id, storedValue);
        }
    });
}

function restoreCustomerDetails() {
    const storedCustomer = loadStoredJson(CUSTOMER_STORAGE_KEY);
    if (!storedCustomer || typeof storedCustomer !== "object") {
        return;
    }

    customerNameEl.value = typeof storedCustomer.name === "string" ? storedCustomer.name : "";
    customerPhoneEl.value = typeof storedCustomer.phone === "string" ? storedCustomer.phone : "";
    customerAddressEl.value = typeof storedCustomer.address === "string" ? storedCustomer.address : "";
}

function getNextInvoiceNumber() {
    const storageKey = "novamart.invoice.counter";
    const currentCounter = Number(localStorage.getItem(storageKey)) || 0;
    const nextCounter = currentCounter + 1;
    localStorage.setItem(storageKey, String(nextCounter));

    const now = new Date();
    const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    const timePart = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}${String(now.getMilliseconds()).padStart(3, "0")}`;
    const counterPart = String(nextCounter).padStart(5, "0");

    return `INV-${datePart}-${timePart}-${counterPart}`;
}

function calculatePrices(product, quantity) {
    const isFixedPrice = Boolean(product.isFixedPrice);
    const showcasedOriginalPrice = isFixedPrice
        ? product.price
        : product.price;
    const customerOfferPrice = isFixedPrice
        ? product.price
        : product.offerRate;

    const rowTotal = quantity * showcasedOriginalPrice;
    const rowOfferTotal = quantity * customerOfferPrice;

    return {
        showcasedOriginalPrice,
        customerOfferPrice,
        rowTotal,
        rowOfferTotal
    };
}

function buildPricePairCell(originalAmount, offerAmount, isFixedPrice = false) {
    if (isFixedPrice) {
        return `
            <td class="price-pair-cell" data-label="Price">
                <div class="price-line"><span class="amount-fixed">${formatAmount(originalAmount)}</span></div>
                <div class="price-line"><span class="price-tag">No offer applied</span></div>
            </td>
        `;
    }

    return `
        <td class="price-pair-cell" data-label="Price">
            <div class="price-line"><span class="amount-original">${formatAmount(originalAmount)}</span></div>
            <div class="price-line"><span class="amount-offer">${formatAmount(offerAmount)}</span></div>
        </td>
    `;
}

function createRowMarkup(product) {
    const quantity = quantityState.get(product.id) || 0;
    const pricing = calculatePrices(product, quantity);
    const productName = product.isFixedPrice
        ? `${product.name} <span class="price-tag">Fixed Price</span>`
        : product.name;

        if(pricing.customerOfferPrice == 0)
            {
                return `
                <tr id="product-row-${product.id}">
                    <td data-label="SI.No">${product.id}</td>
                    <td class="product-image-cell">
    ${getProductImageMarkup(product)}
</td>
                    <td data-label="Product Name"  class="money amount-original" >${productName} (${product.per}) No Stock</td>
                    ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
                    <td data-label="Quantity" style="pointer-events: none; opacity: 0.5; background-color: #f2f2f2; color: #888;">${buildQuantityStepper(product, quantity)}</td>
                    <td class="money amount-offer" id="offer-total-${product.id}" data-label="Total Offer Amount">0.00</td>
                </tr>
            `;
            } else {
                return `
                <tr id="product-row-${product.id}">
                    <td data-label="SI.No">${product.id}</td>
                    <td class="product-image-cell">
    ${getProductImageMarkup(product)}
</td>
                    <td data-label="Product Name" >${productName} (${product.per})</td>
                    ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
                    <td data-label="Quantity" >${buildQuantityStepper(product, quantity)}</td>
                    <td class="money amount-offer" id="offer-total-${product.id}" data-label="Total Offer Amount">0.00</td>
                </tr>
            `;
            }
               
}

function buildQuantityStepper(product, quantity) {
    return `
        <div class="quantity-stepper">
            <button type="button" class="quantity-action" data-action="decrease" data-id="${product.id}" aria-label="Decrease quantity for ${product.name}">-</button>
            <input
                type="number"
                min="0"
                value="${quantity}"
                class="quantity"
                data-id="${product.id}"
                aria-label="Quantity for ${product.name}"
            >
            <button type="button" class="quantity-action" data-action="increase" data-id="${product.id}" aria-label="Increase quantity for ${product.name}">+</button>
        </div>
    `;
}

function syncQuantityInputs(productId, quantity) {
    document.querySelectorAll(`input[data-id="${productId}"]`).forEach((input) => {
        input.value = String(quantity);
    });
}

function refreshQuantityDependentViews() {
    updateTotals();

    if (!reviewScreen.classList.contains("hidden") && !isMinimumOrderMet()) {
        showSelectionScreen();
        showMinimumOrderWarning();
        return;
    }

    if (!reviewScreen.classList.contains("hidden")) {
        renderReviewTable();
    }

    if (!invoiceScreen.classList.contains("hidden")) {
        renderInvoice();
    }
}

function setQuantityValue(productId, nextValue) {
    const quantity = Math.max(0, nextValue);

    quantityState.set(productId, quantity);
    syncQuantityInputs(productId, quantity);
    minimumOrderMessage.classList.add("hidden");
    persistQuantities();
    refreshQuantityDependentViews();
}
function getProductImagePath(product) {
    return `${product.id}.jpg`;
}

function getProductImageMarkup(product) {
    const imagePath = getProductImagePath(product);

    return `
        <button
            type="button"
            class="product-image-button"
            data-image-src="${imagePath}"
            data-image-name="${product.name}"
            aria-label="View image of ${product.name}"
        >
            <img
                class="product-thumbnail"
                src="${imagePath}"
                alt="${product.name}"
                loading="lazy"
                onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');"
            >
        </button>
    `;
}

function matchesCatalogFilters(product, groupName) {
    const searchTerm = productSearchEl.value.trim().toLowerCase();
    const selectedGroup = groupFilterEl.value;
    const matchesGroup = selectedGroup === "all" || selectedGroup === groupName;
    const matchesSearch = searchTerm.length === 0
        || product.name.toLowerCase().includes(searchTerm)
        || String(product.id).includes(searchTerm);

    return matchesGroup && matchesSearch;
}

function populateGroupFilter() {
    const options = productGroups
        .map((group) => `<option value="${group.name}">${group.name}</option>`)
        .join("");

    groupFilterEl.insertAdjacentHTML("beforeend", options);
}

function buildReviewRowMarkup(product, quantity, pricing, index) {
    return `
        <td data-label="SI.No">${index + 1}</td>
        <td data-label="Product Code">${String(product.id)}</td>
        <td data-label="Group">${productGroupById.get(product.id)}</td>
        <td data-label="Product Name">${product.name} (${product.per})</td>
        ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
        <td data-label="Quantity">${buildQuantityStepper(product, quantity)}</td>
        <td class="money amount-offer" data-label="Total Offer Amount">${formatAmount(pricing.rowOfferTotal)}</td>
    `;
}

function buildInvoiceRowMarkup(product, quantity, pricing, index) {
    return `
        <td data-label="SI.No">${index + 1}</td>
        <td data-label="Product Code">${String(product.id)}</td>
        <td data-label="Group">${productGroupById.get(product.id).replace(/\([^)]*\)/g, '').trim()}</td>
        <td data-label="Product Name">${product.name.replace(/\([^)]*\)/g, '').trim()} (${product.per})</td>
        ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
        <td data-label="Quantity">${quantity}</td>
        <td class="money amount-offer" data-label="Total Offer Amount">${formatAmount(pricing.rowOfferTotal)}</td>
    `;
}

function updateMinimumOrderProgress(currentOfferTotal) {
    const progressPercentage = Math.min((currentOfferTotal / MIN_ORDER_OFFER_AMOUNT) * 100, 100);
    const remainingAmount = Math.max(MIN_ORDER_OFFER_AMOUNT - currentOfferTotal, 0);
    const hasReachedMinimum = currentOfferTotal >= MIN_ORDER_OFFER_AMOUNT;

    orderProgressBarEl.style.width = `${progressPercentage}%`;
    orderProgressBarEl.classList.toggle("is-complete", hasReachedMinimum);
    orderTargetCardEl.classList.toggle("is-complete", hasReachedMinimum);
    orderTargetAmountEl.textContent = hasReachedMinimum
        ? "Unlocked"
        : `${formatAmount(remainingAmount)}`;
    orderProgressTextEl.textContent = hasReachedMinimum
        ? `Target reached. ${formatAmount(currentOfferTotal)} of ${formatAmount(MIN_ORDER_OFFER_AMOUNT)}`
        : `${formatAmount(currentOfferTotal)} of ${formatAmount(MIN_ORDER_OFFER_AMOUNT)} reached. Add ${formatAmount(remainingAmount)} more.`;
}

function updateProductRowState(productId, quantity) {
    const row = document.getElementById(`product-row-${productId}`);
    if (!row) {
        return;
    }

    row.classList.toggle("row-selected", quantity > 0);
}

function updateMiniCartSummary(selectedProductCount, totalQuantity, grandTotal, grandOfferTotal) {
    const hasSelections = selectedProductCount > 0;
    const totalDiscount = grandTotal - grandOfferTotal;

    miniCartItemCountEl.textContent = `${selectedProductCount} item${selectedProductCount === 1 ? "" : "s"}`;
    miniCartQuantityEl.textContent = `Qty ${totalQuantity}`;
    miniCartDiscountEl.textContent = formatAmount(totalDiscount);
    miniCartGrandTotalEl.textContent = formatAmount(grandTotal);
    miniCartOfferTotalEl.textContent = formatAmount(grandOfferTotal);
    mobileMiniCartEl.classList.toggle("has-items", hasSelections);
    miniCartReviewButton.disabled = !hasSelections;
    miniCartResetButton.disabled = !hasSelections && !getCustomerDetails().name && !getCustomerDetails().phone && !getCustomerDetails().address;
}

function updateMiniCartScrollState() {
    const shouldCompact = window.innerWidth <= 780 && window.scrollY > 160;
    mobileMiniCartEl.classList.toggle("is-compact", shouldCompact);
}

function updateMiniCartVisibility(targetScreen) {
    const shouldShow = targetScreen === selectionScreen || targetScreen === reviewScreen;
    mobileMiniCartEl.classList.toggle("hidden", !shouldShow);
}

function updateMiniCartAction(targetScreen) {
    const isReviewScreen = targetScreen === reviewScreen;

    miniCartReviewButton.textContent = isReviewScreen ? "Generate Invoice" : "Review";
    miniCartReviewButton.setAttribute("aria-label", isReviewScreen ? "Generate invoice" : "Review selected products");
}

function showMinimumOrderWarning() {
    const currentOfferTotal = getCurrentGrandOfferTotal();
    const remainingAmount = Math.max(MIN_ORDER_OFFER_AMOUNT - currentOfferTotal, 0);

    minimumOrderMessage.textContent = `Minimum order not met. Add ${formatAmount(remainingAmount)} more to reach an offer total of ${formatAmount(MIN_ORDER_OFFER_AMOUNT)}.`;
    minimumOrderMessage.classList.remove("hidden");

    requestAnimationFrame(() => {
       // selectionScreen.scrollIntoView({ behavior: "auto", block: "start" });
        minimumOrderBannerEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

function resetSession() {
    products.forEach((product) => {
        quantityState.set(product.id, 0);
    });

    customerNameEl.value = "";
    customerPhoneEl.value = "";
    customerAddressEl.value = "";
    invoiceCustomerNameEl.textContent = "-";
    invoiceCustomerPhoneEl.textContent = "-";
    invoiceCustomerAddressEl.textContent = "-";
    reviewEmptyState.classList.add("hidden");
    minimumOrderMessage.classList.add("hidden");
    setFieldError(customerNameEl, customerNameErrorEl, "");
    setFieldError(customerPhoneEl, customerPhoneErrorEl, "");
    setFieldError(customerAddressEl, customerAddressErrorEl, "");
    clearStoredSession();
    renderAccordion();
    refreshQuantityDependentViews();
    showScreen(selectionScreen, "back");
    showDownloadToast("Selection reset");
}

function renderAccordion() {
    accordion.innerHTML = "";

    const filteredGroups = productGroups
        .map((group) => ({
            ...group,
            products: group.products.filter((product) => matchesCatalogFilters(product, group.name))
        }))
        .filter((group) => group.products.length > 0);

    if (filteredGroups.length === 0) {
        catalogEmptyStateEl.classList.remove("hidden");
        return;
    }

    catalogEmptyStateEl.classList.add("hidden");

    filteredGroups.forEach((group, index) => {
        const isOpen = true;
        const panelId = `group-panel-${index}`;
        const groupMeta = groupDisplayMeta[group.name] || { icon: group.name.charAt(0), theme: "default" };

        const section = document.createElement("section");
        section.className = `accordion-item group-theme-${groupMeta.theme}`;

        section.innerHTML = `
            <button class="accordion-trigger" type="button" aria-expanded="${isOpen}" aria-controls="${panelId}">
                <span class="accordion-title"><span class="accordion-icon">${groupMeta.icon}</span><span>${group.name}</span></span>
                <span class="accordion-meta">${group.products.length} items</span>
            </button>
            <div class="accordion-panel ${isOpen ? "open" : ""}" id="${panelId}">
                <div class="table-wrap">
                    <table aria-label="${group.name} product list with pricing and totals">
                        <thead>
                            <tr>
                                <th>SI.No</th>
                                    <th>Image</th>
                                <th>Product Name</th>
                                <th>Price (Original / Offer)</th>
                                <th>Quantity</th>
                                <th>Total Offer Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${group.products.map((product) => createRowMarkup(product)).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        accordion.appendChild(section);
    });
}

function updateTotals() {
    let grandTotal = 0;
    let grandOfferTotal = 0;
    let selectedProductCount = 0;
    let totalQuantity = 0;

    products.forEach((product) => {
        const quantity = quantityState.get(product.id) || 0;
        const pricing = calculatePrices(product, quantity);

        if (quantity > 0) {
            selectedProductCount += 1;
        }

        const offerTotalCell = document.getElementById(`offer-total-${product.id}`);
        if (offerTotalCell) {
            offerTotalCell.textContent = formatAmount(pricing.rowOfferTotal);
        }
        updateProductRowState(product.id, quantity);

        grandTotal += pricing.rowTotal;
        grandOfferTotal += pricing.rowOfferTotal;
        totalQuantity += quantity;
    });

    productCountEl.textContent = String(selectedProductCount);
    totalDiscountEl.textContent = formatAmount(grandTotal - grandOfferTotal);
    grandTotalEl.textContent = formatAmount(grandTotal);
    grandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
    reviewProductCountEl.textContent = String(selectedProductCount);
    reviewTotalQuantityEl.textContent = String(totalQuantity);
    reviewGrandTotalEl.textContent = formatAmount(grandTotal);
    reviewGrandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
  //  updateMinimumOrderProgress(grandOfferTotal);
    updateMiniCartSummary(selectedProductCount, totalQuantity, grandTotal, grandOfferTotal);
}

function getSelectedProducts() {
    return products
        .map((product) => ({ product, quantity: quantityState.get(product.id) || 0 }))
        .filter((item) => item.quantity > 0);
}

function getCurrentGrandOfferTotal() {
    return products.reduce((sum, product) => {
        const quantity = quantityState.get(product.id) || 0;
        const pricing = calculatePrices(product, quantity);
        return sum + pricing.rowOfferTotal;
    }, 0);
}

function isMinimumOrderMet() {
    return getCurrentGrandOfferTotal() >= MIN_ORDER_OFFER_AMOUNT;
}

function getCustomerDetails() {
    return {
        name: customerNameEl.value.trim(),
        phone: customerPhoneEl.value.trim(),
        address: customerAddressEl.value.trim()
    };
}

function setFieldError(field, errorEl, message = "") {
    const hasError = Boolean(message);

    field.classList.toggle("input-error", hasError);
    errorEl.textContent = message;
    errorEl.classList.toggle("hidden", !hasError);
    field.setAttribute("aria-invalid", String(hasError));
}

function validateCustomerDetails() {
    const customer = getCustomerDetails();
    const cleanedPhone = customer.phone.replace(/\D/g, "");
    const errors = {
        name: customer.name.length > 1 ? "" : "Please enter at least 2 characters.",
        phone: cleanedPhone.length >= 10 ? "" : "Please enter a valid 10-digit mobile number.",
        address: customer.address.length > 5 ? "" : "Please enter at least 6 characters for the address."
    };

    setFieldError(customerNameEl, customerNameErrorEl, errors.name);
    setFieldError(customerPhoneEl, customerPhoneErrorEl, errors.phone);
    setFieldError(customerAddressEl, customerAddressErrorEl, errors.address);

    return {
        isValid: !errors.name && !errors.phone && !errors.address,
        firstInvalidField: errors.name ? customerNameEl : errors.phone ? customerPhoneEl : errors.address ? customerAddressEl : null
    };
}

function renderReviewTable() {
    const selectedItems = getSelectedProducts();
    reviewTableBody.innerHTML = "";

    if (selectedItems.length === 0) {
        reviewEmptyState.classList.remove("hidden");
        return;
    }

    reviewEmptyState.classList.add("hidden");

    selectedItems.forEach(({ product, quantity }, index) => {
        const pricing = calculatePrices(product, quantity);

        const row = document.createElement("tr");
        row.innerHTML = buildReviewRowMarkup(product, quantity, pricing, index);

        reviewTableBody.appendChild(row);
    });
}

function renderInvoice() {
    const selectedItems = getSelectedProducts();
    invoiceTableBody.innerHTML = "";

    let grandTotal = 0;
    let grandOfferTotal = 0;
    let totalQuantity = 0;

    selectedItems.forEach(({ product, quantity }, index) => {
        const pricing = calculatePrices(product, quantity);

        const row = document.createElement("tr");
        row.innerHTML = buildInvoiceRowMarkup(product, quantity, pricing, index);
        invoiceTableBody.appendChild(row);

        grandTotal += pricing.rowTotal;
        grandOfferTotal += pricing.rowOfferTotal;
        totalQuantity += quantity;
    });

    invoiceProductCountEl.textContent = String(selectedItems.length);
    invoiceTotalQuantityEl.textContent = String(totalQuantity);
    invoiceGrandTotalEl.textContent = formatAmount(grandTotal);
    invoiceGrandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
}

function showScreen(targetScreen, direction = "forward") {
    window.scrollTo({ top: 0, behavior: "auto" });
    updateMiniCartVisibility(targetScreen);
    updateMiniCartAction(targetScreen);

    screens.forEach((screen) => {
        const isTarget = screen === targetScreen;
        screen.classList.toggle("hidden", !isTarget);
        screen.classList.remove("screen-active");
        screen.classList.remove("screen-forward", "screen-back");
    });

    void targetScreen.offsetWidth;
    targetScreen.classList.add(direction === "back" ? "screen-back" : "screen-forward");
    targetScreen.classList.add("screen-active");
}

function showReviewScreen() {
    if (!isMinimumOrderMet()) {
        showMinimumOrderWarning();
        return;
    }

    minimumOrderMessage.classList.add("hidden");
    renderReviewTable();
    showScreen(reviewScreen, "forward");
}

function showSelectionScreen() {
    showScreen(selectionScreen, "back");
}

function showInvoiceScreen() {
    const selectedItems = getSelectedProducts();
    if (selectedItems.length === 0) {
        reviewEmptyState.classList.remove("hidden");
        return;
    }

    if (!isMinimumOrderMet()) {
        return;
    }

    const customerValidation = validateCustomerDetails();
    if (!customerValidation.isValid) {
        customerValidation.firstInvalidField?.focus();
        return;
    }

    reviewEmptyState.classList.add("hidden");
    renderInvoice();

    const today = new Date();
    invoiceDateEl.textContent = today.toLocaleDateString("en-IN");
    invoiceNumberEl.textContent = getNextInvoiceNumber();

    const customer = getCustomerDetails();
    invoiceCustomerNameEl.textContent = customer.name;
    invoiceCustomerPhoneEl.textContent = customer.phone;
    invoiceCustomerAddressEl.textContent = customer.address;

    showScreen(invoiceScreen, "forward");
}

function sanitizeFileName(value) {
    return value.replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").trim();
}

function loadExternalScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
        document.head.appendChild(script);
    });
}

function ensureJsPdfLoaded() {
    if (window.jspdf?.jsPDF?.API?.autoTable) {
        return Promise.resolve(window.jspdf.jsPDF);
    }

    if (jsPdfLoaderPromise) {
        return jsPdfLoaderPromise;
    }

    jsPdfLoaderPromise = (async () => {
        if (!window.jspdf?.jsPDF) {
            await loadExternalScript(JSPDF_LIBRARY_URL);
        }

        if (!window.jspdf?.jsPDF?.API?.autoTable) {
            await loadExternalScript(JSPDF_AUTOTABLE_LIBRARY_URL);
        }

        if (!window.jspdf?.jsPDF?.API?.autoTable) {
            throw new Error("jsPDF autoTable did not initialize");
        }

        return window.jspdf.jsPDF;
    })();

    return jsPdfLoaderPromise;
}

function truncatePdfCellText(value, maxCharsPerLine = 34, maxLines = 2) {
    const text = (value || "").replace(/\s+/g, " ").trim();
    if (!text) {
        return "-";
    }

    const words = text.split(" ");
    const lines = [];
    let current = "";

    for (const word of words) {
        if (!current) {
            current = word;
            continue;
        }

        const candidate = `${current} ${word}`;
        if (candidate.length <= maxCharsPerLine) {
            current = candidate;
            continue;
        }

        lines.push(current);
        current = word;

        if (lines.length === maxLines - 1) {
            break;
        }
    }

    if (lines.length < maxLines && current) {
        lines.push(current);
    }

    const consumedText = lines.join(" ");
    const isTruncated = consumedText.length < text.length;

    if (isTruncated && lines.length > 0) {
        const lastIndex = lines.length - 1;
        const normalizedLastLine = lines[lastIndex].trimEnd();
        const safeBase = normalizedLastLine.length >= maxCharsPerLine
            ? normalizedLastLine.slice(0, Math.max(0, maxCharsPerLine - 1)).trimEnd()
            : normalizedLastLine;
        lines[lastIndex] = `${safeBase}...`;
    }

    return lines.slice(0, maxLines).join("\n");
}


async function registerTamilFont(doc) {
    const response = await fetch("NotoSansTamil-Regular.ttf");

    if (!response.ok) {
        throw new Error("Could not load the Tamil font");
    }

    const fontBuffer = await response.arrayBuffer();
    const bytes = new Uint8Array(fontBuffer);
    let binary = "";

    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }

    const fontBase64 = btoa(binary);
    const fontFile = "NotoSansTamil-Regular.ttf";

    doc.addFileToVFS(fontFile, fontBase64);
    doc.addFont(fontFile, "NotoTamil", "normal");
    doc.addFont(fontFile, "NotoTamil", "bold");
}


function appendPdfAuditTrail(doc, invoiceId, generatedAt) {
    const totalPages = doc.internal.getNumberOfPages();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    for (let page = 1; page <= totalPages; page += 1) {
        doc.setPage(page);
        doc.setFont("NotoTamil", "normal");
        doc.setFontSize(7);
        doc.setTextColor(100, 116, 139);
        doc.text(`Generated: ${generatedAt}  |  Invoice ID: ${invoiceId}  |  App: ${APP_VERSION}`, 8, pageHeight - 4);
        doc.text(`Page ${page}/${totalPages}`, pageWidth - 8, pageHeight - 4, { align: "right" });
    }

    doc.setTextColor(0, 0, 0);
}

function buildWhatsAppMessage({ invoiceId, customerName, grandOfferTotal, generatedAt }) {
    return [
        "Hello,",
        `Please find your invoice PDF attached.`,
        `Invoice: ${invoiceId}`,
        `Customer: ${customerName || "-"}`,
        `Total Offer Amount: ${formatAmount(grandOfferTotal)}`,
        `Generated: ${generatedAt}`,
        "Thank you."
    ].join("\n");
}

function downloadPdfBlob(pdfBlob, fileName) {
    const downloadUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1500);
}

async function sharePdfToWhatsApp(pdfBlob, fileName, message, targetPhone) {
    const pdfFile = new File([pdfBlob], `${fileName}.pdf`, { type: "application/pdf" });

    if (navigator.share && navigator.canShare?.({ files: [pdfFile] })) {
        try {
            await navigator.share({
                title: "Invoice PDF",
                text: message,
                files: [pdfFile]
            });
            showDownloadToast("Shared. Select WhatsApp if prompted.");
            return;
        } catch {
            // User cancellation or unsupported target; continue to WhatsApp text fallback.
        }
    }

    const cleanedPhone = (targetPhone || "").replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const waUrl = cleanedPhone.length >= 10
        ? `https://wa.me/7010942234?text=${encodedMessage}`
        : `https://wa.me/?text=${encodedMessage}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    showDownloadToast("WhatsApp opened. Attach downloaded PDF manually.");
}

function buildDownloadDocument() {
    const invoiceNumber = invoiceNumberEl.textContent.trim() || "invoice";
    const invoiceCustomerName = invoiceCustomerNameEl.textContent.trim();
    const customerName = invoiceCustomerName && invoiceCustomerName !== "-"
        ? invoiceCustomerName
        : getCustomerDetails().name || "customer";
    const companyHeading = document.querySelector(".header").innerHTML;
    const invoiceMarkup = `
        <header class="download-header">${companyHeading}</header>
        <section class="download-invoice">
            ${invoiceScreen.querySelector(".review-header").outerHTML}
            ${invoiceScreen.querySelector(".invoice-meta").outerHTML}
            ${invoiceScreen.querySelector(".invoice-customer").outerHTML}
            ${invoiceScreen.querySelector(".table-wrap").outerHTML}
            ${invoiceScreen.querySelector(".invoice-summary").outerHTML}
            ${invoiceScreen.querySelector(".invoice-terms").outerHTML}
        </section>
    `;

    return {
        fileNameBase: `${sanitizeFileName(customerName)}-${sanitizeFileName(invoiceNumber)}`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${invoiceNumber}</title>
    <style>
        body {
            margin: 0;
            padding: 24px;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            color: #1f2937;
            background: #f8fafc;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        .sheet {
            max-width: 980px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #dbe4ee;
            border-radius: 18px;
            overflow: visible;
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .download-header {
            padding: 22px 24px;
            background: linear-gradient(120deg, #ecfeff, #eff6ff);
            border-bottom: 2px solid #cbd5e1;
        }

        .download-header h1,
        .download-invoice h2,
        .download-invoice h3 {
            margin-top: 0;
        }

        .download-header p {
            margin: 4px 0 0;
            color: #4b5563;
        }

        .download-invoice {
            padding: 16px 16px 18px;
        }

        .review-header {
            padding: 0 0 12px;
            border-bottom: 2px solid #0f766e;
            margin-bottom: 14px;
        }

        .invoice-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 12px 18px;
            padding: 0 0 14px;
            color: #4b5563;
        }

        .invoice-customer,
        .invoice-terms,
        .summary-item {
            border: 1px solid #dbe4ee;
            border-radius: 12px;
            background: #ffffff;
        }

        .invoice-customer {
            margin-bottom: 14px;
            padding: 12px 14px;
            background: #f8fafc;
        }

        .invoice-customer p {
            margin: 4px 0;
        }

        .table-wrap {
            overflow: visible;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 16px;
            table-layout: fixed;
        }

        th,
        td {
            padding: 7px 6px;
            border: 1px solid #e5e7eb;
            text-align: left;
            font-size: 11px;
            vertical-align: top;
            word-break: break-word;
            white-space: normal;
        }

        th {
            background: #f8fafc;
        }

        .summary {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 16px;
        }

        .summary-item {
            padding: 14px;
        }

        .label {
            display: block;
            margin-bottom: 6px;
            color: #6b7280;
        }

        .amount-original {
            color: #b91c1c;
            text-decoration: line-through;
        }

        .amount-offer {
            color: #166534;
            font-weight: 700;
        }

        .amount-fixed {
            color: #0f172a;
            font-weight: 700;
        }

        .price-line {
            line-height: 1.4;
        }

        .price-tag {
            font-size: 9px;
            font-weight: 700;
            color: #6b7280;
            text-transform: uppercase;
        }

        .price-pair-cell {
            min-width: 0;
        }

        .invoice-terms {
            padding: 12px 14px;
            background: #fafafa;
        }

        .invoice-terms ol {
            margin: 0;
            padding-left: 18px;
        }

        .invoice-summary,
        .invoice-terms {
            break-inside: avoid;
            page-break-inside: avoid;
        }

        @media print {
            body {
                padding: 0;
                background: #ffffff;
            }

            .sheet {
                max-width: none;
                border: 0;
                border-radius: 0;
                box-shadow: none;
            }

            .download-invoice {
                padding: 0;
            }

            .invoice-customer,
            .invoice-terms,
            .summary-item,
            .invoice-summary {
                break-inside: avoid;
                page-break-inside: avoid;
            }
        }
    </style>
 </head>
<body>
    <main class="sheet">${invoiceMarkup}</main>
</body>
</html>`
    };
}

async function downloadInvoice() {
    const JsPdf = await ensureJsPdfLoaded();
    const doc = new JsPdf({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
    });
    await registerTamilFont(doc);
    doc.setFont("NotoTamil", "normal");
    const { fileNameBase } = buildDownloadDocument();

    renderInvoice();

    const selectedItems = getSelectedProducts();
    if (selectedItems.length === 0) {
        showDownloadToast("No products selected for PDF");
        return;
    }

    try {
        printButton.disabled = true;
        printButton.textContent = "Preparing PDF...";

        const JsPdf = await ensureJsPdfLoaded();
        const doc = new JsPdf({ orientation: "landscape", unit: "mm", format: "a4" });
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 8;
        const footerReserve = 12;
        let cursorY = margin;
        const generatedAt = new Date().toLocaleString("en-IN");
        const invoiceId = invoiceNumberEl.textContent.trim() || "-";

        const headerTitle = document.querySelector(".header h1")?.textContent?.trim() || "Quotation / Invoice";
        const headerLines = Array.from(document.querySelectorAll(".header p"))
            .map((node) => node.textContent?.trim() || "")
            .filter(Boolean);

        doc.setFont("NotoTamil", "bold");
        doc.setFontSize(14);
        doc.text(headerTitle, margin, cursorY);
        cursorY += 5;

        doc.setFont("NotoTamil", "normal");
        doc.setFontSize(9);
        headerLines.forEach((line) => {
            doc.text(line, margin, cursorY);
            cursorY += 4;
        });

        cursorY += 2;
        doc.setFont("NotoTamil", "bold");
        doc.setFontSize(12);
        doc.text("Quotation / Invoice", margin, cursorY);
        cursorY += 6;

        doc.setFont("NotoTamil", "normal");
        doc.setFontSize(9);
        const contentWidth = pageWidth - margin * 2;
        const metaGap = 5;
        const metaColumnWidth = (contentWidth - (metaGap * 2)) / 3;
        const metaColumnsX = [
            margin,
            margin + metaColumnWidth + metaGap,
            margin + (metaColumnWidth * 2) + (metaGap * 2)
        ];

        const invoiceNoLines = doc.splitTextToSize(`Invoice No: ${invoiceNumberEl.textContent.trim() || "-"}`, metaColumnWidth);
        const dateLines = doc.splitTextToSize(`Date: ${invoiceDateEl.textContent.trim() || "-"}`, metaColumnWidth);
        const productCountLines = doc.splitTextToSize(`Product Count: ${selectedItems.length}`, metaColumnWidth);

        doc.text(invoiceNoLines, metaColumnsX[0], cursorY);
        doc.text(dateLines, metaColumnsX[1], cursorY);
        doc.text(productCountLines, metaColumnsX[2], cursorY);

        const metaLineHeight = 4;
        const firstMetaRows = Math.max(invoiceNoLines.length, dateLines.length, productCountLines.length);
        cursorY += firstMetaRows * metaLineHeight + 1;

        const totalQuantity = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalQtyLines = doc.splitTextToSize(`Total Qty: ${totalQuantity}`, metaColumnWidth);
        doc.text(totalQtyLines, metaColumnsX[0], cursorY);
        cursorY += totalQtyLines.length * metaLineHeight + 2;

        doc.setDrawColor(226, 232, 240);
        doc.line(margin, cursorY, pageWidth - margin, cursorY);
        cursorY += 6;

        const customerDetailsForPdf = getCustomerDetails();
        doc.text(`Customer Name: ${customerDetailsForPdf.name || "-"}`, margin, cursorY);
        cursorY += 4;
        doc.text(`Mobile Number: ${customerDetailsForPdf.phone || "-"}`, margin, cursorY);
        cursorY += 4;

        const addressLines = doc.splitTextToSize(`Delivery Address: ${customerDetailsForPdf.address || "-"}`, pageWidth - margin * 2);
        doc.text(addressLines, margin, cursorY);
        cursorY += (addressLines.length * 4) + 2;

        let grandTotal = 0;
        let grandOfferTotal = 0;

        const tableBody = selectedItems.map(({ product, quantity }, index) => {
            const pricing = calculatePrices(product, quantity);
            grandTotal += pricing.rowTotal;
            grandOfferTotal += pricing.rowOfferTotal;

            const pricePair = product.isFixedPrice
                ? `${formatAmount(pricing.showcasedOriginalPrice)} (Fixed)`
                : `${formatAmount(pricing.customerOfferPrice)}`;

            return [
                String(index + 1),
                String(product.id),
                productGroupById.get(product.id).replace(/\([^)]*\)/g, '').trim() || "-",
                product.name.replace(/\([^)]*\)/g, '').trim()+' ('+product.per+')',
                pricePair,
                String(quantity),
                formatAmount(pricing.rowOfferTotal)
            ];
        });

        doc.autoTable({
            startY: cursorY,
            margin: { left: margin, right: margin },
            tableWidth: pageWidth - margin * 2,
            head: [["SI.No", "Product Code", "Group", "Product Name", "Price", "Quantity", "Total Offer Amount"]],
            body: tableBody,
            theme: "grid",
            styles: {
                font: "NotoTamil",
                fontSize: 8,
                cellPadding: 1.8,
                overflow: "linebreak",
                valign: "top"
            },
            headStyles: {
                font: "NotoTamil",
                fillColor: [248, 250, 252],
                textColor: [31, 41, 55],
                fontStyle: "bold"
            },
            columnStyles: {
                0: { cellWidth: 12 },
                1: { cellWidth: 22 },
                2: { cellWidth: 28 },
                3: { cellWidth: 70, overflow: "linebreak" },
                4: { cellWidth: 48 },
                5: { cellWidth: 18, halign: "right" },
                6: { cellWidth: 34, halign: "right" }
            }
        });

        const summaryStartY = (doc.lastAutoTable?.finalY || cursorY) + 6;
        let summaryY = summaryStartY;

        if (summaryY > pageHeight - (footerReserve + 20)) {
            doc.addPage();
            summaryY = margin;
        }

        doc.setFont("NotoTamil", "bold");
        doc.setFontSize(10);
        doc.text(`Grand Total Amount: ${formatAmount(grandTotal)}`, margin, summaryY);
        summaryY += 5;
        doc.text(`Grand Total Offer Amount: ${formatAmount(grandOfferTotal)}`, margin, summaryY);

        summaryY += 7;
        doc.setFontSize(10);
        doc.text("Happy Deepavali!!", margin, summaryY);
        // summaryY += 4;
        // doc.setFont("NotoTamil", "normal");
        // doc.setFontSize(9);
        // doc.text("1. 100% Advance Payment: Full payment must be made in advance to confirm your order.", margin, summaryY);
        // summaryY += 4;
        // doc.text("2. Transportation Charges Extra", margin, summaryY);
        // summaryY += 4;
        // const termThree = doc.splitTextToSize("3. After payment confirmation, your delivery box will be handed over to the transport office the next day", pageWidth - margin * 2);
        // doc.text(termThree, margin, summaryY);

        appendPdfAuditTrail(doc, invoiceId, generatedAt);

        const pdfBlob = doc.output("blob");
        downloadPdfBlob(pdfBlob, fileNameBase);

        const whatsappMessage = buildWhatsAppMessage({
            invoiceId,
            customerName: customerDetailsForPdf.name,
            grandOfferTotal,
            generatedAt
        });

        await sharePdfToWhatsApp(pdfBlob, fileNameBase, whatsappMessage, '7010942234');

        showDownloadToast("PDF downloaded");
    } catch {
        showDownloadToast("PDF generation failed. Please try again.");
    } finally {
        printButton.disabled = false;
        printButton.textContent = "Download PDF";
    }
}

function showDownloadToast(message = "Invoice downloaded") {
    if (downloadToastTimer) {
        clearTimeout(downloadToastTimer);
    }

    downloadToastEl.textContent = message;
    downloadToastEl.classList.remove("hidden");
    downloadToastEl.classList.add("toast-visible");

    downloadToastTimer = window.setTimeout(() => {
        downloadToastEl.classList.remove("toast-visible");
        downloadToastEl.classList.add("hidden");
        downloadToastTimer = null;
    }, 2200);
}

function initBasicSourceProtection() {
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        const isCtrlOrMeta = event.ctrlKey || event.metaKey;

        if (event.key === "F12") {
            event.preventDefault();
            return;
        }

        if (isCtrlOrMeta && (key === "u" || key === "s" || key === "p")) {
            event.preventDefault();
        }

        if (event.ctrlKey && event.shiftKey && (key === "i" || key === "j" || key === "c")) {
            event.preventDefault();
        }
    });
}

accordion.addEventListener("input", (event) => {
    if (event.target.classList.contains("quantity")) {
        setQuantityValue(Number(event.target.dataset.id), Number(event.target.value) || 0);
    }
});

accordion.addEventListener("click", (event) => {
    const quantityButton = event.target.closest(".quantity-action");
    if (quantityButton) {
        const productId = quantityButton.dataset.id;
        const input = event.target.closest("tr")?.querySelector(`input[data-id="${productId}"]`)
            || document.querySelector(`input[data-id="${productId}"]`);
        if (input) {
            const currentValue = Math.max(0, Number(input.value) || 0);
            const nextValue = quantityButton.dataset.action === "increase"
                ? currentValue + 1
                : currentValue - 1;
            setQuantityValue(Number(productId), nextValue);
        }
        return;
    }

    const trigger = event.target.closest(".accordion-trigger");
    if (!trigger) {
        return;
    }

    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const expanded = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("open", !expanded);
});

reviewTableBody.addEventListener("input", (event) => {
    if (event.target.classList.contains("quantity")) {
        setQuantityValue(Number(event.target.dataset.id), Number(event.target.value) || 0);
    }
});

reviewTableBody.addEventListener("click", (event) => {
    const quantityButton = event.target.closest(".quantity-action");
    if (!quantityButton) {
        return;
    }

    const productId = Number(quantityButton.dataset.id);
    const input = event.target.closest("tr")?.querySelector(`input[data-id="${productId}"]`);
    const currentValue = Math.max(0, Number(input?.value) || 0);
    const nextValue = quantityButton.dataset.action === "increase"
        ? currentValue + 1
        : currentValue - 1;

    setQuantityValue(productId, nextValue);
});

reviewButton.addEventListener("click", () => {
    showReviewScreen();
});

miniCartReviewButton.addEventListener("click", () => {
    if (!reviewScreen.classList.contains("hidden")) {
        showInvoiceScreen();
        return;
    }

    showReviewScreen();
});

miniCartResetButton.addEventListener("click", () => {
    resetSession();
});

webResetButtons.forEach((button) => {
    button.addEventListener("click", () => {
        resetSession();
    });
});

backButton.addEventListener("click", () => {
    showSelectionScreen();
});

invoiceButton.addEventListener("click", () => {
    showInvoiceScreen();
});

invoiceBackButton.addEventListener("click", () => {
    showReviewScreen();
});

printButton.addEventListener("click", () => {
    downloadInvoice();
});

[customerNameEl, customerPhoneEl, customerAddressEl].forEach((field) => {
    field.addEventListener("input", () => {
        validateCustomerDetails();
        persistCustomerDetails();
    });
});

//initBasicSourceProtection();
restoreQuantities();
restoreCustomerDetails();
populateGroupFilter();
renderAccordion();
updateTotals();
showScreen(selectionScreen, "forward");

productSearchEl.addEventListener("input", () => {
    renderAccordion();
    updateTotals();
});

groupFilterEl.addEventListener("change", () => {
    renderAccordion();
    updateTotals();
});

window.addEventListener("scroll", updateMiniCartScrollState, { passive: true });
window.addEventListener("resize", updateMiniCartScrollState);
updateMiniCartScrollState();
