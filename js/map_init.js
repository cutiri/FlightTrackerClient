// DEPRECATED

const STARTUP_LAT = 36;
const STARTUP_LNG = -95;
const STARTUP_ZOOM = 5;
const MAX_ZOOM = 10;
const MAX_AIRPLANES = 1000;

let markers = [];
const flags = {
    AD: "🇦🇩",
    AE: "🇦🇪",
    AF: "🇦🇫",
    AG: "🇦🇬",
    AI: "🇦🇮",
    AL: "🇦🇱",
    AM: "🇦🇲",
    AO: "🇦🇴",
    AQ: "🇦🇶",
    AR: "🇦🇷",
    AS: "🇦🇸",
    AT: "🇦🇹",
    AU: "🇦🇺",
    AW: "🇦🇼",
    AX: "🇦🇽",
    AZ: "🇦🇿",
    BA: "🇧🇦",
    BB: "🇧🇧",
    BD: "🇧🇩",
    BE: "🇧🇪",
    BF: "🇧🇫",
    BG: "🇧🇬",
    BH: "🇧🇭",
    BI: "🇧🇮",
    BJ: "🇧🇯",
    BL: "🇧🇱",
    BM: "🇧🇲",
    BN: "🇧🇳",
    BO: "🇧🇴",
    BQ: "🇧🇶",
    BR: "🇧🇷",
    BS: "🇧🇸",
    BT: "🇧🇹",
    BV: "🇧🇻",
    BW: "🇧🇼",
    BY: "🇧🇾",
    BZ: "🇧🇿",
    CA: "🇨🇦",
    CC: "🇨🇨",
    CD: "🇨🇩",
    CF: "🇨🇫",
    CG: "🇨🇬",
    CH: "🇨🇭",
    CI: "🇨🇮",
    CK: "🇨🇰",
    CL: "🇨🇱",
    CM: "🇨🇲",
    CN: "🇨🇳",
    CO: "🇨🇴",
    CR: "🇨🇷",
    CU: "🇨🇺",
    CV: "🇨🇻",
    CW: "🇨🇼",
    CX: "🇨🇽",
    CY: "🇨🇾",
    CZ: "🇨🇿",
    DE: "🇩🇪",
    DJ: "🇩🇯",
    DK: "🇩🇰",
    DM: "🇩🇲",
    DO: "🇩🇴",
    DZ: "🇩🇿",
    EC: "🇪🇨",
    EE: "🇪🇪",
    EG: "🇪🇬",
    EH: "🇪🇭",
    ER: "🇪🇷",
    ES: "🇪🇸",
    ET: "🇪🇹",
    EU: "🇪🇺",
    FI: "🇫🇮",
    FJ: "🇫🇯",
    FK: "🇫🇰",
    FM: "🇫🇲",
    FO: "🇫🇴",
    FR: "🇫🇷",
    GA: "🇬🇦",
    UK: "🇬🇧",
    GB: "🇬🇧",
    GD: "🇬🇩",
    GE: "🇬🇪",
    GF: "🇬🇫",
    GG: "🇬🇬",
    GH: "🇬🇭",
    GI: "🇬🇮",
    GL: "🇬🇱",
    GM: "🇬🇲",
    GN: "🇬🇳",
    GP: "🇬🇵",
    GQ: "🇬🇶",
    GR: "🇬🇷",
    GS: "🇬🇸",
    GT: "🇬🇹",
    GU: "🇬🇺",
    GW: "🇬🇼",
    GY: "🇬🇾",
    HK: "🇭🇰",
    HM: "🇭🇲",
    HN: "🇭🇳",
    HR: "🇭🇷",
    HT: "🇭🇹",
    HU: "🇭🇺",
    ID: "🇮🇩",
    IE: "🇮🇪",
    IL: "🇮🇱",
    IM: "🇮🇲",
    IN: "🇮🇳",
    IO: "🇮🇴",
    IQ: "🇮🇶",
    IR: "🇮🇷",
    IS: "🇮🇸",
    IT: "🇮🇹",
    JE: "🇯🇪",
    JM: "🇯🇲",
    JO: "🇯🇴",
    JP: "🇯🇵",
    KE: "🇰🇪",
    KG: "🇰🇬",
    KH: "🇰🇭",
    KI: "🇰🇮",
    KM: "🇰🇲",
    KN: "🇰🇳",
    KP: "🇰🇵",
    KR: "🇰🇷",
    KW: "🇰🇼",
    KY: "🇰🇾",
    KZ: "🇰🇿",
    LA: "🇱🇦",
    LB: "🇱🇧",
    LC: "🇱🇨",
    LI: "🇱🇮",
    LK: "🇱🇰",
    LR: "🇱🇷",
    LS: "🇱🇸",
    LT: "🇱🇹",
    LU: "🇱🇺",
    LV: "🇱🇻",
    LY: "🇱🇾",
    MA: "🇲🇦",
    MC: "🇲🇨",
    MD: "🇲🇩",
    ME: "🇲🇪",
    MF: "🇲🇫",
    MG: "🇲🇬",
    MH: "🇲🇭",
    MK: "🇲🇰",
    ML: "🇲🇱",
    MM: "🇲🇲",
    MN: "🇲🇳",
    MO: "🇲🇴",
    MP: "🇲🇵",
    MQ: "🇲🇶",
    MR: "🇲🇷",
    MS: "🇲🇸",
    MT: "🇲🇹",
    MU: "🇲🇺",
    MV: "🇲🇻",
    MW: "🇲🇼",
    MX: "🇲🇽",
    MY: "🇲🇾",
    MZ: "🇲🇿",
    NA: "🇳🇦",
    NC: "🇳🇨",
    NE: "🇳🇪",
    NF: "🇳🇫",
    NG: "🇳🇬",
    NI: "🇳🇮",
    NL: "🇳🇱",
    NO: "🇳🇴",
    NP: "🇳🇵",
    NR: "🇳🇷",
    NU: "🇳🇺",
    NZ: "🇳🇿",
    OM: "🇴🇲",
    PA: "🇵🇦",
    PE: "🇵🇪",
    PF: "🇵🇫",
    PG: "🇵🇬",
    PH: "🇵🇭",
    PK: "🇵🇰",
    PL: "🇵🇱",
    PM: "🇵🇲",
    PN: "🇵🇳",
    PR: "🇵🇷",
    PS: "🇵🇸",
    PT: "🇵🇹",
    PW: "🇵🇼",
    PY: "🇵🇾",
    QA: "🇶🇦",
    RE: "🇷🇪",
    RO: "🇷🇴",
    RS: "🇷🇸",
    RU: "🇷🇺",
    RW: "🇷🇼",
    SA: "🇸🇦",
    SB: "🇸🇧",
    SC: "🇸🇨",
    SD: "🇸🇩",
    SE: "🇸🇪",
    SG: "🇸🇬",
    SH: "🇸🇭",
    SI: "🇸🇮",
    SJ: "🇸🇯",
    SK: "🇸🇰",
    SL: "🇸🇱",
    SM: "🇸🇲",
    SN: "🇸🇳",
    SO: "🇸🇴",
    SR: "🇸🇷",
    SS: "🇸🇸",
    ST: "🇸🇹",
    SV: "🇸🇻",
    SX: "🇸🇽",
    SY: "🇸🇾",
    SZ: "🇸🇿",
    TC: "🇹🇨",
    TD: "🇹🇩",
    TF: "🇹🇫",
    TG: "🇹🇬",
    TH: "🇹🇭",
    TJ: "🇹🇯",
    TK: "🇹🇰",
    TL: "🇹🇱",
    TM: "🇹🇲",
    TN: "🇹🇳",
    TO: "🇹🇴",
    TR: "🇹🇷",
    TT: "🇹🇹",
    TV: "🇹🇻",
    TW: "🇹🇼",
    TZ: "🇹🇿",
    UA: "🇺🇦",
    UG: "🇺🇬",
    UM: "🇺🇲",
    US: "🇺🇸",
    UY: "🇺🇾",
    UZ: "🇺🇿",
    VA: "🇻🇦",
    VC: "🇻🇨",
    VE: "🇻🇪",
    VG: "🇻🇬",
    VI: "🇻🇮",
    VN: "🇻🇳",
    VU: "🇻🇺",
    WF: "🇼🇫",
    WS: "🇼🇸",
    XK: "🇽🇰",
    YE: "🇾🇪",
    YT: "🇾🇹",
    ZA: "🇿🇦",
    ZM: "🇿🇲",
    ZW: "🇿🇼",
};

const airplaneIcon = L.icon({
    iconUrl: "./images/plane.png",
    shadowUrl: "./images/plane_shadow1.png",

    iconSize: [30, 30], // size of the icon
    shadowSize: [30, 30], // size of the shadow
    iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 12], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

//Check: https://stackoverflow.com/questions/33632608/markers-do-not-appear-on-continuous-world-in-leaflet
let map = L.map("map", {
    maxBounds: L.latLngBounds([-90, -180], [90, 180]),
}).setView([STARTUP_LAT, STARTUP_LNG], STARTUP_ZOOM);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 14,
    minZoom: 3,
    noWrap: true,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function addAirplane(airplane) {
    if (isInBound(airplane)) {
        let coords = [airplane.lat, airplane.lng];
        const marker = L.marker(coords, {
            icon: airplaneIcon,
            rotationAngle: airplane.dir,
        });
        marker.bindTooltip(airplane.flight_icao);
        markers.push(marker);
        marker.addTo(map);
        marker.on("click", () =>
            //alert(`${airplane.flight_icao},${airplane.hex}`)
            showFlightInfo(airplane)
        ); //TODO DELETE THIS, ADD SOME LOGIC HERE
        return true;
    }
    return false;
}

function restartMarkers() {
    markers.forEach((marker) => {
        map.removeLayer(marker);
    });
}

// Will draw a list of airplanes, but it will limit the amount to MAX_AIRPLANES
// It only draws airplanes that are inside the bound of the map
function drawAirplanes(airplanes) {
    getFlights().then((flights) => {
        let count = 0;
        restartMarkers();
        //airplanes.every((airplane) => {
        flights.every((airplane) => {
            count += addAirplane(airplane) ? 1 : 0;
            if (count > MAX_AIRPLANES) {
                return false;
            } else {
                return true;
            }
        });
    });
}

function getFlights() {
    return fetch(`http://localhost:8080/api/flights`)
        .then((res) => res.json())
        .then((flights) => {
            return flights;
        })
        .catch((err) => {
            console.log(err);
            return [];
        });
}

function getFlightInfo(flight) {
    return fetch(`http://localhost:8080/api/flight/${flight.hex}`)
        .then((res) => res.json())
        .then((flight) => {
            return flight;
        })
        .catch((err) => {
            console.log(err);
            return undefined;
        });
}

function isInBound(coords) {
    return map.getBounds().contains(coords);
}

// It gets a flight {hex, lat, lng, dir} and with that queries the API for the full flight information
// With the flight info then prints that in the screen
function showFlightInfo(flight) {
    getFlightInfo(flight).then((flightInfo) => {
        document.getElementById("p_flight_icao").textContent =
            flightInfo.flight_icao;
        let airline = airlines_snapshot.find(
            (airline) => airline.icao_code === flightInfo.airline_icao
        );
        document.getElementById("img_airline").src =
            "https://airlabs.co/img/airline/m/" + airline?.iata_code + ".png";
        document.getElementById("p_flag").textContent = flags[flightInfo.flag];
        document.getElementById("p_squawk").textContent = flightInfo.squawk;
        fetch(
            `http://localhost:8080/api/airplane/picture/${flightInfo.reg_number}`
        )
            .then((response) => response.json())
            .then(
                (picture) =>
                    (document.getElementById("img_airplane").src =
                        picture.picture)
            )
            .catch((err) => console.log(err));
    });
}
