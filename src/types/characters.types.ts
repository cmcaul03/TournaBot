import { client } from "../main";
import { Indexable } from "./global.types"

export namespace Characters {
    const characters = {
        "1271": "tbbayo",
        "1272": "tbbowserjr",
        "1273": "tbbowser",
        "1274": "tbfalcon",
        "1275": "tbcloud",
        "1276": "tbcorrin",
        "1277": "tbdaisy",
        "1278": "tbdarkpit",
        "1279": "tbdiddy",
        "1280": "tbkong",
        "1282": "tbdrmario",
        "1283": "tbduckhunt",
        "1285": "tbfalco",
        "1286": "tbfox",
        "1287": "tbganon",
        "1289": "tbgreninja",
        "1290": "tbicies",
        "1291": "tbike",
        "1292": "tbinkling",
        "1293": "tbpuff",
        "1294": "tbdedede",
        "1295": "tbkirby",
        "1296": "tblink",
        "1297": "tbmac",
        "1298": "tblucario",
        "1299": "tblucas",
        "1300": "tblucina",
        "1301": "tbluigi",
        "1302": "tbmario",
        "1304": "tbmarth",
        "1305": "tbmega",
        "1307": "tbmeta",
        "1310": "tbmewtwo",
        "1311": "tbbrawler",
        "1313": "tbness",
        "1314": "tbolimar",
        "1315": "tbpacman",
        "1316": "tbpalu",
        "1317": "tbpeach",
        "1318": "tbpichu",
        "1319": "tbpika",
        "1320": "tbpit",
        "1321": "tbpkmnt",
        "1322": "tbridley",
        "1323": "tbrob",
        "1324": "tbrobin",
        "1325": "tbrosa",
        "1326": "tbroy",
        "1327": "tbryu",
        "1328": "tbsamus",
        "1329": "tbsheik",
        "1330": "tbshulk",
        "1331": "tbsnake",
        "1332": "tbsonic",
        "1333": "tbtink",
        "1334": "tbvillager",
        "1335": "tbwario",
        "1336": "tbwiifit",
        "1337": "tbwolf",
        "1338": "tbyoshi",
        "1339": "tbyink",
        "1340": "tbzelda",
        "1341": "tbzerosuit",
        "1405": "tbgandw",
        "1406": "tbincin",
        "1407": "tbkrool",
        "1408": "tbdsamus",
        "1409": "tbchrom",
        "1410": "tbken",
        "1411": "tbsimon",
        "1412": "tbrichter",
        "1413": "tbisabelle",
        "1414": "tbsword",
        "1415": "tbgunner",
        "1441": "tbplant",
        "1453": "tbjoker",
        "1526": "tbhero",
        "1530": "tbbanjo",
        "1532": "tbterry",
        "1539": "tbbyleth",
        "1746": "tbrandom",
        "1747": "tbminmin",
        "1766": "tbsteve",
        "1777": "tbseph",
        "1795": "tbpythra",
        "1846": "tbkazuya",
        "1897": "tbsora"
    } as Indexable

    export const getEmojiFromId = (id: string) => {
        return client.emojis.cache.find(e => e.name === characters[id]);
    }
}