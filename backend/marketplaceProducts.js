const express = require("express");
const prodRouter = express.Router();
const Chance = require("chance");

const chance = new Chance();

let products = [
  {
    id: chance.guid(),
    name: "Tablou Rose",
    price: 65,
    description: chance.paragraph({sentences: 10}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/99159234_163454725143945_7898450080024231936_o.jpg?_nc_cat=104&_nc_sid=a26aad&_nc_ohc=G4RqwynRhzcAX_E2pS3&_nc_ht=scontent.fias1-1.fna&oh=26b85a1e405e670cf8c24b49e121cf92&oe=5F528FD9",
    "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/99044346_163454688477282_1535481500156297216_o.jpg?_nc_cat=110&_nc_sid=a26aad&_nc_ohc=gONZev3jcoIAX9HFpvv&_nc_ht=scontent.fias1-1.fna&oh=ef4c84be8f99a0a2323f047f8d37b994&oe=5F611E27",
    "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/99383888_163454758477275_1249741144179343360_o.jpg?_nc_cat=100&_nc_sid=a26aad&_nc_ohc=H0EDJ_Pa2uIAX-C31Wp&_nc_ht=scontent.fias1-1.fna&oh=fe09d8df1f4389af156ee594932b2f26&oe=5F64D932"],
    filters: {
      productType: "tablou",
    }
  },
  {
    id: chance.guid(),
    name: "Plicuri embosate",
    price: 15,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83904351_132674244888660_1561256659756515328_o.jpg?_nc_cat=103&_nc_sid=a26aad&_nc_ohc=W0WzW7SvlX4AX-bT10N&_nc_ht=scontent.fias1-1.fna&oh=03acd8fb66e0333b5fce4ac3850ff001&oe=5F538EB4",
    "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84523632_132674278221990_7197757269834989568_o.jpg?_nc_cat=111&_nc_sid=a26aad&_nc_ohc=adYHgJEpe-UAX-1yL9d&_nc_ht=scontent.fias1-1.fna&oh=ca7e6cf1445bc7539d3fb796b0f2757b&oe=5F645F89",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83490282_132674311555320_7494249844509245440_o.jpg?_nc_cat=109&_nc_sid=a26aad&_nc_ohc=ZA5-3AqT_4QAX-N33DR&_nc_ht=scontent.fias1-1.fna&oh=cbda3f777168380e40fbf88f1633272e&oe=5F646282"],
    filters: {
      productType: "plic",
    }
  },
  {
    id: chance.guid(),
    name: "Umerase personalizate",
    price: 40,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83692961_168515407971210_6729412976247034526_o.jpg?_nc_cat=105&_nc_sid=a26aad&_nc_ohc=R-Gh4L8VdnIAX8b3uLE&_nc_ht=scontent.fias1-1.fna&oh=d15ebe01dc237b86fbd99e4329a600e6&oe=5F5436F6",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83330098_168515437971207_4878338323027890042_o.jpg?_nc_cat=108&_nc_sid=a26aad&_nc_ohc=Uqr7XOHqj1AAX-QczoP&_nc_ht=scontent.fias1-1.fna&oh=c141bd187b05e61a772b6da8f565ec2d&oe=5F637BF1",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/104142880_168515474637870_5438343663835961155_o.jpg?_nc_cat=103&_nc_sid=a26aad&_nc_ohc=H4ZF7x3qTT0AX9iAv0N&_nc_ht=scontent.fias1-1.fna&oh=07393459a40e61770508293b8e93c16d&oe=5F657944",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/104102818_168515514637866_7727613193145490678_o.jpg?_nc_cat=103&_nc_sid=a26aad&_nc_ohc=40OmV1IqBMAAX8kue9d&_nc_ht=scontent.fias1-1.fna&oh=b1f3a364db697f72f9b921c4b8a1809d&oe=5F6340C0"],
    filters: {
      productType: "umerase",
    }
  },
  {
    id: chance.guid(),
    name: "Plicuri cu dantela",
    price: 10,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/106453566_171718840984200_2929993024744567561_o.jpg?_nc_cat=108&_nc_sid=a26aad&_nc_ohc=oTwZ4jDE2EYAX9ll1ND&_nc_ht=scontent.fias1-1.fna&oh=29ef340aae80d5fb6146f8289b2d6a72&oe=5F5695C8",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/105603544_171718867650864_6295775558505810609_o.jpg?_nc_cat=104&_nc_sid=a26aad&_nc_ohc=lDbu-m0t-6YAX-cLqDK&_nc_ht=scontent.fias1-1.fna&oh=febfd03b79ec8508f4cb468bd0f3b354&oe=5F66094A",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/81740135_171718900984194_3889700206839024017_o.jpg?_nc_cat=105&_nc_sid=a26aad&_nc_ohc=ZIEB3WuGI-wAX8BuNk-&_nc_ht=scontent.fias1-1.fna&oh=1ddb2980e7032bfa9affaf4541e7615b&oe=5F62A483",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/106296871_171718810984203_6729513070628417947_o.jpg?_nc_cat=101&_nc_sid=a26aad&_nc_ohc=SeNzcw48JvYAX9nymqS&_nc_ht=scontent.fias1-1.fna&oh=28c45b393b83abba925d20ec420d59e9&oe=5F62A2E3"],
    filters: {
      productType: "plic",
    }
  },
  {
    id: chance.guid(),
    name: "Invitatie Elefantel Baiat",
    price: 15,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/91402586_149578489864902_1500620650774003712_o.jpg?_nc_cat=111&_nc_sid=9267fe&_nc_ohc=5KSxzqgGxbMAX9-sipD&_nc_ht=scontent.fias1-1.fna&oh=3240128fa863fb1b0c3b0d48c7471042&oe=5F566F65"],
    filters: {
      productType: "invitatie-botez",
    }
  },
  {
    id: chance.guid(),
    name: "Invitatie Elefantel Fetita",
    price: 15,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/91597624_149001146589303_4489606361927122944_o.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_ohc=8zotptCYCW4AX_wkkpD&_nc_oc=AQlvk1MhPDoG--u0cv5_-OtqCnalhmX2mfBHeagAPIFspdTFPKiI65atUvRS1C-EtIMYfVnxzswH3b8xdc6JolBg&_nc_ht=scontent.fias1-1.fna&oh=a7a217851e321df94014745c30b33d74&oe=5F554BFB"],
    filters: {
      productType: "invitatie-botez",
    }
  },
  {
    id: chance.guid(),
    name: "Invitatie Botez Gemeni",
    price: 18,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/91239145_147738720048879_633448654719418368_o.jpg?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=5qBav9wNKMQAX-wlgQ7&_nc_ht=scontent.fias1-1.fna&oh=d107d50453bf342dfd28bc747066bb96&oe=5F55FCDD"],
    filters: {
      productType: "invitatie-botez",
    }
  },
  {
    id: chance.guid(),
    name: "Invitatie Caprioara Fetita",
    price: 17,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/91117548_147424186746999_2279408971565498368_o.jpg?_nc_cat=104&_nc_sid=a26aad&_nc_ohc=0xhdMglf0VgAX9nHBNA&_nc_ht=scontent.fias1-1.fna&oh=bb4184112a6bdafaae107dc044ffa90e&oe=5F541BFD",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/90819832_147424156747002_2268639916596396032_o.jpg?_nc_cat=102&_nc_sid=a26aad&_nc_ohc=j62EMNfqVhMAX-KyqU8&_nc_ht=scontent.fias1-1.fna&oh=59411ddfe12263968e3e93915b3f95ec&oe=5F654C39"],
    filters: {
      productType: "invitatie-botez",
    }
  },
  {
    id: chance.guid(),
    name: "Invitatie Caprioara Baietel",
    price: 16,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/90883793_147424260080325_8137671748297424896_o.jpg?_nc_cat=110&_nc_sid=a26aad&_nc_ohc=kNO4Nf88VmsAX-PsDjZ&_nc_ht=scontent.fias1-1.fna&oh=39a9e55d04f9d16080f4c92455750287&oe=5F56D3A2",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/91018863_147424230080328_2287538661757026304_o.jpg?_nc_cat=108&_nc_sid=a26aad&_nc_ohc=e1wG9vTGX9MAX-SXsg2&_nc_ht=scontent.fias1-1.fna&oh=53ba6154ef07f3b19d495e412aa5fb5a&oe=5F659651"],
    filters: {
      productType: "invitatie-botez",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Green Love",
    price: 29,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83363455_129449018544516_6241379404337905664_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=CsHSsMxZbKMAX9-0_A0&_nc_ht=scontent.fias1-1.fna&oh=ad336e870c58f7cae64b48287b98f6d5&oe=5F567210",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82672765_129449025211182_4898306636541591552_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=NZylVG2QyLEAX8LWDR7&_nc_ht=scontent.fias1-1.fna&oh=ea73c03de45b12548c7bbc896a2056cb&oe=5F64297A",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82814596_129449075211177_2588099244770459648_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=iZTArO2Pri4AX8wt_nA&_nc_ht=scontent.fias1-1.fna&oh=b230e057b9807f4121c56e9ce32cb90e&oe=5F638C9C",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82761268_129449105211174_2948672426558357504_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=FkV49wFUSpUAX9ztzae&_nc_ht=scontent.fias1-1.fna&oh=4a76c2716b9a0389bdb31cee6c8b0598&oe=5F64130C",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84100338_129449158544502_937446860837093376_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=v7GL1Z4T5x0AX-I2Pi7&_nc_ht=scontent.fias1-1.fna&oh=e77df5dc4f458a5d3c4647e0873ddac1&oe=5F64A98E",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82780504_129449178544500_6788186409644589056_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=Hj-Yf8U5uT4AX9dCBjN&_nc_ht=scontent.fias1-1.fna&oh=fce76100ecd53b20d1fc66f19a743159&oe=5F643BDF",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82780259_129449215211163_6106515812040835072_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=vXUgqcUvTS0AX-WAKed&_nc_ht=scontent.fias1-1.fna&oh=f387eb079324161a1c2dd10fecd21a86&oe=5F64986B",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84067735_129449231877828_3116248237833453568_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=vLXWf6VVWoIAX-y9d04&_nc_ht=scontent.fias1-1.fna&oh=ac6821148b2c25af92bc3ec043fa8f22&oe=5F6364C7",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82757365_129449281877823_7959249602706669568_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=W-jnh6Qa3AsAX86DZlA&_nc_ht=scontent.fias1-1.fna&oh=5462350946a6917dde22057204c0250a&oe=5F6577B7"],
    filters: {
      productType: "invitatie-nunta",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Free Spirit",
    price: 20,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83888324_129448308544587_5356609278004166656_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=TLRijxFFsN4AX_ZjxTo&_nc_ht=scontent.fias1-1.fna&oh=813726b04535ee5c21765c61f76bd32d&oe=5F55B126",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82751020_129448305211254_1485329068256657408_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=qOdC0d-nincAX9mwx-4&_nc_ht=scontent.fias1-1.fna&oh=e54f3f1d245a3941e14026d6b2d4ee85&oe=5F654AE6",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82898613_129448341877917_6066051709669474304_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=iykpCEbwR18AX8Uxn7R&_nc_ht=scontent.fias1-1.fna&oh=d6b8609e7a7c21468ec9551a7c593565&oe=5F65E7D4",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83787841_129448351877916_8973945023775113216_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=yDJgjhhEaIQAX9fK2yg&_nc_ht=scontent.fias1-1.fna&oh=485efb01faa200028d0864ee08062af1&oe=5F65C5B1",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83546299_129448408544577_3725554945806565376_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=DtmJ7_mEjPAAX-ovtRD&_nc_ht=scontent.fias1-1.fna&oh=f558d7ea58ee20164df6a59c65f24ae1&oe=5F625676",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82788198_129448438544574_4096686815065407488_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=jHBrhP2Pqq8AX_9s84h&_nc_ht=scontent.fias1-1.fna&oh=3261151b72f8c4cfe2730a32391cddc0&oe=5F6461E8",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82746288_129448458544572_3139371263718326272_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=fBaT2cKO4QYAX-4lZdu&_nc_ht=scontent.fias1-1.fna&oh=4dee61abda798d6c03ce70f9e7fdb210&oe=5F64B37F",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83445378_129448481877903_7628086308262379520_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=wVYKWyiG2u0AX9rOVIq&_nc_ht=scontent.fias1-1.fna&oh=509650aef752f725ff93ede66c82f076&oe=5F63B608",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82714688_129448521877899_4054416751960522752_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=VOydTy3bpQoAX98fdtr&_nc_ht=scontent.fias1-1.fna&oh=829e2660adff563bb54156fba38b4209&oe=5F628180"],
    filters: {
      productType: "invitatie-nunta",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Bohemian",
    price: 22,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83728071_129447398544678_3963665282701983744_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=DJCQumhH2W0AX__mzrp&_nc_ht=scontent.fias1-1.fna&oh=45abf6990876dd207d907f7a4425d700&oe=5F556C63",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83630993_129447401878011_1735054727592280064_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=Y-pj8IdGlVAAX_SzRR2&_nc_ht=scontent.fias1-1.fna&oh=61887969383fed3ce3af8dfc0a3608cd&oe=5F631D24",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82775153_129447435211341_5698085334386999296_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=zS9UzNtYa08AX9YHMQP&_nc_ht=scontent.fias1-1.fna&oh=306e27b1b08e9fd7d9daeebb96318872&oe=5F656761",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83868454_129447441878007_4980482666722754560_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=dWgiNdat6OwAX-OMmiB&_nc_ht=scontent.fias1-1.fna&oh=d759f48f1304c13d77b85151a2e4b7d1&oe=5F6458B5",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84759733_130486385107446_7947119867738456064_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=gkE_dk3r1J0AX98ad69&_nc_ht=scontent.fias1-1.fna&oh=8ffaf4321b643a37da3889c73c7e2111&oe=5F633E47",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83415440_129447528544665_1171291388969484288_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=6LNTggKUhqQAX-O63zK&_nc_ht=scontent.fias1-1.fna&oh=d6fda69498129d382f1051b807983d82&oe=5F650888",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82916896_129447551877996_1872763134427529216_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=4Kbav9LFNFgAX9Ygkmx&_nc_ht=scontent.fias1-1.fna&oh=842a3192b4ebbfbb39f2ddd6156e93de&oe=5F64C6A0",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83551600_129447578544660_6544014276166680576_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=nPI74xo3RKsAX8CASLg&_nc_oc=AQlROoSEpdA8pko4QaITglniYVfa-18DGNjgbTpapt47khJil60pdZSNdmPAVjs9WRuNNXWvTDV7vv4ceJWyEs0r&_nc_ht=scontent.fias1-1.fna&oh=3267f74a9f758098ccef93462ba588e8&oe=5F651838",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82799574_129447625211322_3353883774684233728_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=p1eRcGj-5BIAX-xvz7K&_nc_ht=scontent.fias1-1.fna&oh=1a8b194921a11d41bf1bbf628f7f5651&oe=5F650F80"],
    filters: {
      productType: "invitatie-nunta",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Blanche",
    price: 26,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83353671_129445081878243_7865732874589175808_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=yg2FGhum3K4AX_zFF0I&_nc_ht=scontent.fias1-1.fna&oh=6cbf3c71b922e89690dae5f99d3793bd&oe=5F5721F9",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83204277_129445085211576_1449284560247324672_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=kr-AmyBOazMAX86DAi6&_nc_ht=scontent.fias1-1.fna&oh=d727069dec2ce8b844976b3be64ff64f&oe=5F62DC17",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83771290_129445111878240_8691730032789291008_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=v7Rv0L6E8u0AX_vC5yi&_nc_ht=scontent.fias1-1.fna&oh=bdca565c24eb9be7ad3539a2e497e1e9&oe=5F62CC98",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84321038_129445148544903_9071771176048525312_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=0MDQt_oIK9kAX8MLGtX&_nc_ht=scontent.fias1-1.fna&oh=5b3afd40df6597e6b8fc94a7e44a4d96&oe=5F636CFD",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82782729_129445188544899_2435090875936669696_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=z4eeQJoZffUAX-Bi4Xa&_nc_ht=scontent.fias1-1.fna&oh=1847177a03c6fa6ba942366cbf4b1d09&oe=5F625FE5",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83611073_129445205211564_780365037645594624_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=1nhmhm6nzVcAX9pXtzx&_nc_ht=scontent.fias1-1.fna&oh=070904cc6140289b341300cd3a3684ba&oe=5F62ACD2",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84075492_129445238544894_8766734077471490048_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=-yWC5JlCngYAX8IDkmS&_nc_ht=scontent.fias1-1.fna&oh=c47c6c23e871c202f312b62b51723f6e&oe=5F6623CD",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82720436_129445251878226_1835853551285305344_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=_JbyVoZWXjIAX-hT-hU&_nc_ht=scontent.fias1-1.fna&oh=09a7cdda771956dd61f6d5b1413194da&oe=5F647378",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82906720_129445301878221_9117242673416110080_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=YBXaez_51RkAX9EKqQd&_nc_ht=scontent.fias1-1.fna&oh=2d8e3d39aa2ba9ebc496fcdc8154b698&oe=5F65E49A"],
    filters: {
      productType: "invitatie-nunta",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Elegance",
    price: 28,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82791314_129444191878332_3679233508770840576_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=cbqyoWeWO3gAX9hmQGo&_nc_ht=scontent.fias1-1.fna&oh=7851ab0ea2ab56212f81a594662d9ef2&oe=5F561827",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83725063_129444198544998_7299851378355077120_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=l0tBRTfKNC8AX_sbsLR&_nc_ht=scontent.fias1-1.fna&oh=35a70a9293b61ad6ca9a59fb5f475cb1&oe=5F65C2AB",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82814585_129444228544995_8562883676789014528_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=0o-4GpgadmoAX-gmmVs&_nc_ht=scontent.fias1-1.fna&oh=bd8a7e50cde77d9a6c68b7676b3b4235&oe=5F65BBAE",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83239836_129444248544993_4935069250197913600_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=WChNu9doCC4AX9PYw4l&_nc_ht=scontent.fias1-1.fna&oh=d178c79e7e95d9e1c5429afa48b0a258&oe=5F62EB12",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82786492_129444288544989_3806727461173985280_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=kf5xG6vKeHcAX_J4xk4&_nc_ht=scontent.fias1-1.fna&oh=b61e0c4f42af9ade9134c48edbb026f2&oe=5F664642",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82843716_129444305211654_891055050762223616_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=Jz9eYs6mfT8AX-iAN_A&_nc_ht=scontent.fias1-1.fna&oh=0391d6b2a302b087e9261a27da99b606&oe=5F62846A",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82813242_129444331878318_330691655495581696_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=sxPFdgn6pJQAX-lAod0&_nc_ht=scontent.fias1-1.fna&oh=e0dde8cb6e98041911d771654e217e50&oe=5F65AD4D",
"https://scontent.fias1-1.fna.fbcdn.net/v/l/t1.0-9/83434146_129444351878316_8543498517992177664_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=wjE35EgFy18AX-6YcsU&_nc_ht=scontent.fias1-1.fna&oh=3d1c7309453d891dc5a498c81910ca78&oe=5F6456D5",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83444419_129444398544978_4076684396453691392_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=q13ipGnbbTgAX9ex_34&_nc_ht=scontent.fias1-1.fna&oh=b3976e59b4a06d9590e2f5630598626b&oe=5F65CE41"],
    filters: {
      productType: "invitatie-nunta",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Rustic",
    price: 19,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82914906_129443105211774_8705891755439947776_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=bIEqS34yLFoAX9JPWZJ&_nc_ht=scontent.fias1-1.fna&oh=a376016d380fd15e9ca2b8f7eccea996&oe=5F53C05B",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82898613_129443111878440_2085316156758949888_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=IMNVHOOIY18AX_Fmvlz&_nc_ht=scontent.fias1-1.fna&oh=97b7d0f5f1cda761f9fde237ff08657b&oe=5F62CDEE",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83164503_129443141878437_4325267302430801920_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=u6j0NPoei1wAX84mMFg&_nc_ht=scontent.fias1-1.fna&oh=f587b19144453b1da082ce66108caef2&oe=5F646844",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84076823_129443185211766_119216425142321152_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=jlI_BJSjShcAX813gyA&_nc_ht=scontent.fias1-1.fna&oh=69f584b142ccaf7f92aa058ce724a675&oe=5F65BF1E",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83687609_129443231878428_1456287942510116864_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=u1gtgECPooYAX8Mikdy&_nc_ht=scontent.fias1-1.fna&oh=288e85ee474a9b1834128fba0c44efd7&oe=5F6391AA",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84273007_129443255211759_1165886567764459520_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=Md0SRh1nbRoAX9CV_3V&_nc_ht=scontent.fias1-1.fna&oh=d093267decac3221a9b674562c979490&oe=5F63E5D7",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82812791_129443281878423_6650969042125324288_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=7yOfd9vSymkAX8h-MKM&_nc_ht=scontent.fias1-1.fna&oh=fac8ce25b17d33daca1dff398537b8af&oe=5F64E4FB",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82688282_129443291878422_4522876840754282496_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=auLUCcJrHk8AX_MSMEc&_nc_ht=scontent.fias1-1.fna&oh=0a76b646b694a8950ccacb614630e6dd&oe=5F65A738",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83521343_129443331878418_7792559130220167168_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=jT23lLJzLIkAX9Cqq8c&_nc_ht=scontent.fias1-1.fna&oh=e8b952880b5f96a510c18a6148f8ae8e&oe=5F66461D"],
    filters: {
      productType: "invitatie-nunta",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Coloured Dreams",
    price: 20,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82900595_129441918545226_7049163680704888832_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=Dm2fvWSUKUkAX8Q2gNd&_nc_ht=scontent.fias1-1.fna&oh=b1b2643818215ced67f3413e5a6c5492&oe=5F564740",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82876448_129441921878559_2175778278365724672_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=QLI7Xd_8jkkAX8lyZ2h&_nc_ht=scontent.fias1-1.fna&oh=3041a99039f1788381cd8b3701b707d9&oe=5F649709",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82736682_129441948545223_9223245489938366464_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=2pzVntazbScAX8NdjmD&_nc_ht=scontent.fias1-1.fna&oh=1dfd44dfa3ba4aa615f00b5b8d2096d9&oe=5F635E0F",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83639869_129441958545222_2388387573358657536_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=hvdDH81BYmwAX8nDbi4&_nc_ht=scontent.fias1-1.fna&oh=36895106a6131f31a46e55be465c4b85&oe=5F6330C4",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83224221_129441998545218_5518336791226089472_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=2wue5u77i3QAX-J36IC&_nc_ht=scontent.fias1-1.fna&oh=f35ca32721262c458507f04ad4e6d1c4&oe=5F646A84",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82797845_129442025211882_793989794894970880_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=0wiX-CgY5I0AX9iFS-J&_nc_ht=scontent.fias1-1.fna&oh=410c8db53569d853e134436fb81b2510&oe=5F652BE2",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82704779_129442055211879_3059907720132952064_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=fz0kS0RDVsAAX-30nTz&_nc_ht=scontent.fias1-1.fna&oh=7b53b05b195d1c7c5bbe1b99a47a839c&oe=5F64634F",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83948420_129442075211877_4741342237755965440_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=lXN3WryY8dIAX9buHJd&_nc_ht=scontent.fias1-1.fna&oh=dabc3c2294e4abc6ca17a7d1ea16be46&oe=5F628C7D",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83332137_129442121878539_5810150858024812544_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=C2z5VEq7z1EAX90Ex-I&_nc_oc=AQkfQCsceZlrZb2EIieTr4v34c3mPxRjFV1wsYhVkK-nCdxwKHD1fEqYFMv8rqpL_1b5QGel2CCEx970g-cIRc6h&_nc_ht=scontent.fias1-1.fna&oh=8133c1128111294817b4527dd004fd38&oe=5F62C9DA"],
    filters: {
      productType: "invitatie-nunta",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Peony",
    price: 21,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84106299_129439818545436_5908793419156684800_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=qaHGCMWgfngAX-ieGQU&_nc_ht=scontent.fias1-1.fna&oh=0742902375ddaa91bc11b219f0ac3bf7&oe=5F5446CF",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82786358_129439821878769_4788922675735035904_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=y_4AooHjRygAX8QVYeY&_nc_ht=scontent.fias1-1.fna&oh=647a14c7655f06fff4240611c2e4c546&oe=5F628C09",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83479981_129439928545425_3078161202291933184_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=67tbd2-YdeEAX_HskjX&_nc_ht=scontent.fias1-1.fna&oh=b994971c6a4b55abaf3722bf742e5839&oe=5F64CE08",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83372018_129439978545420_3882770729028026368_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=cgXq3FhG__kAX_Xy69e&_nc_ht=scontent.fias1-1.fna&oh=5550b010016a8a22fc50b5411ce97daa&oe=5F6577DD",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83650195_129440018545416_8201997778432294912_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=4noAIVPfdF4AX95iwyn&_nc_ht=scontent.fias1-1.fna&oh=e7cb84f7d669ded8efefb06768e7fc47&oe=5F626F20",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83401072_129440041878747_1422668828302639104_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=7573016zoWkAX_IojUX&_nc_ht=scontent.fias1-1.fna&oh=6600fe0dbafe6a6623600a081b1257f2&oe=5F644E29",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83499621_129440075212077_2235751243181981696_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=yuPUkToScscAX_p6-Ob&_nc_ht=scontent.fias1-1.fna&oh=978d8b4031618952840e01f223dc7ae1&oe=5F6409CE",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82728220_129440088545409_2162762461579575296_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=sPIRSVpwKkYAX8jkAfO&_nc_ht=scontent.fias1-1.fna&oh=2e980976b614b5a57f03a2e782eb5f22&oe=5F65B963",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83915098_129440131878738_8225593246424760320_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=bZ_5pwDJx9QAX_1UB05&_nc_ht=scontent.fias1-1.fna&oh=90da0ab19be06e4d628a725a7a77c757&oe=5F64F327"],
    filters: {
      productType: "invitatie-nunta",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Delicate Roses",
    price: 24,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82862321_129436681879083_1797299133107666944_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=Q9Mz28SoxbAAX-nbszu&_nc_ht=scontent.fias1-1.fna&oh=7ed27b112866a4c048ec0c68fc8e7659&oe=5F5564AB",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83954301_129436688545749_4723589690517618688_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=if_jyu2I-O0AX-9DIP2&_nc_ht=scontent.fias1-1.fna&oh=f659001858d4acf5170e13b4730fb041&oe=5F64B2D1",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82704782_129436725212412_3469847702697672704_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=vIQuaEUW9mQAX9Jp60N&_nc_ht=scontent.fias1-1.fna&oh=4e37362aeb65a1d80e016cf1b987a3b7&oe=5F62DAD8",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82809707_129436778545740_4397391056144957440_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=fC35nuSzSAEAX945bKr&_nc_ht=scontent.fias1-1.fna&oh=4a2c2c5dfef6fe21b6a9798adad31fd4&oe=5F631C13",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83695600_129436831879068_8611838568727314432_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=Mz8kD_Cwpn4AX8rdePT&_nc_ht=scontent.fias1-1.fna&oh=436d18ea7c4b4c0b7eecc0bf22ca1391&oe=5F65976E",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83305398_129436858545732_6817333883076345856_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=jVDvbQdbz-cAX9WArO2&_nc_ht=scontent.fias1-1.fna&oh=8af69bf6c140313ffd89e4cade8bd7f0&oe=5F64B4D6",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82954718_129436905212394_566056490381606912_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=yOG1KLLnZFgAX-3OQ0C&_nc_ht=scontent.fias1-1.fna&oh=c07d72dbc8f00beed027c8435a0a5ff7&oe=5F64D223",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83856280_129436915212393_2567009585252532224_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=hVe1HeFk8TcAX-0A-L-&_nc_oc=AQmQR9tZ4-IYet89FakAMZ1UJnvISIiqJH0syiatut-ukkVBgaw4STHe3rbrtkwnV5sDXI4Dgg2sA24SpfT4sTgH&_nc_ht=scontent.fias1-1.fna&oh=987f9acff2d5535a5424c46cdcef3445&oe=5F648474",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83573732_129436961879055_679493530221019136_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=HrdacuXnJBYAX--P-IY&_nc_ht=scontent.fias1-1.fna&oh=3d9c27932c20b008d46b7ead3b61d73d&oe=5F62DD71"],
    filters: {
      productType: "invitatie-nunta",
    }
  },
  {
    id: chance.guid(),
    name: "Set Nunta Magnolia",
    price: 20,
    description: chance.paragraph({sentences: 6}),
    img: ["https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/84217161_129431448546273_3984963248133767168_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=76k_s6j1mO8AX-DFE6H&_nc_ht=scontent.fias1-1.fna&oh=2c886c08bb5f4cdf20269eb390fe1bf4&oe=5F5569C7",
  "https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83322034_129431441879607_2249019037109452800_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=OGZ6PHVhWcYAX-dT83t&_nc_ht=scontent.fias1-1.fna&oh=777a22ec4c95a40261d8c61553a159db&oe=5F644731",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82817054_129431481879603_4543920269244235776_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=N0gLw2cPYdwAX8YIZC1&_nc_oc=AQlx-RPoH2-X_Z4JZj9hlzYnW5he-pRVe2JlSgb_gZOrMubtf0-P_V5O-mx0ku_YKAMJzb6BMZYOd2tzFE-jtcLa&_nc_ht=scontent.fias1-1.fna&oh=8d13ab2d51bda31f53ad9d827d0341d9&oe=5F63944A",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83999155_129431498546268_3927442490600194048_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=1e33WnNpuRsAX86VZCX&_nc_ht=scontent.fias1-1.fna&oh=4a7231b090657eeb5e3ecd7e4e6ea0fe&oe=5F64EDE8",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82874752_129431525212932_426279653066407936_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=pxqH1Aa0yo4AX-rObte&_nc_ht=scontent.fias1-1.fna&oh=3768a74d8fa9e3a22832e521d5e13de2&oe=5F64C5BD",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82822217_129431575212927_5674343068707323904_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=MUUU29S1nFUAX-vbH7h&_nc_ht=scontent.fias1-1.fna&oh=a430718881ea6b5fcedd2ab0899cecef&oe=5F650E28",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82761251_129431581879593_6023691478021177344_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=wvYolW-MFf8AX9jk1Mt&_nc_ht=scontent.fias1-1.fna&oh=16c5eb5d79f7eec29bee34588f9594ab&oe=5F63F9C9",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/82714688_129431635212921_8780809320955641856_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=aDXc7jGeqccAX94rUfn&_nc_ht=scontent.fias1-1.fna&oh=b9d4726bffaae33cf623e35be3f06b63&oe=5F64F7F0",
"https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/83630993_129431688546249_1417138405074010112_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=v6i3QWdaKFgAX_QID2U&_nc_ht=scontent.fias1-1.fna&oh=d4b2f8ced1e7bfeb21eab7e41874ab5e&oe=5F62AA31"],
    filters: {
      productType: "invitatie-nunta",
    }
  }
];

let favorites = [];

let cartItems = [];

//get all products
prodRouter.get("/", (req, res) => {
  res.json(products);
});

//get all favorite products
prodRouter.get("/favorites", (req, res) => {
  if(favorites.length === 0) {
    res.send("No fav products yet");
  } else {
  res.json(favorites);
  }
});

//get all cart products
prodRouter.get("/cart", (req, res) => {
  if(cartItems.length === 0) {
    res.send("No products in the cart yet");
  } else {
  res.json(cartItems);
  }
});

//add favorite product
prodRouter.post("/favorites/:productId", function(req, res) {
  const productId = req.params.productId;

  const product = products.find(function (p) {
    return p.id === productId;
  });

  if (product) {
    if(favorites.includes(product)) {
    res.send("Produsul este deja in lista de favorite!");
  } else {
    favorites.push(product);

    res.send(product);
  }
}
})

//add product to cart
prodRouter.post("/cart/:productId", function(req, res) {
  const productId = req.params.productId;

  const product = products.find(function (p) {
    return p.id === productId;
  });

  if (product) {
    if(cartItems.includes(product)) {
    res.send("Produsul este deja in cos!");
  } else {
    cartItems.push(product);

    res.send(product);
  }
}
})

//delete favorite product
prodRouter.delete("/favorites/:productId", function (req, res) {
  const productId = req.params.productId;

  favorites = favorites.filter(p => p.id != productId);
  res.json(favorites);
})

//delete cart product
prodRouter.delete("/cart/:productId", function (req, res) {
  const productId = req.params.productId;

  cartItems = cartItems.filter(p => p.id != productId);
  res.json(cartItems);
})

module.exports = prodRouter;
