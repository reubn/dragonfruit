var testPairs = {
  "AF": "FA",
  "AX": "XA",
  "AL": "LA",
  "DZ": "ZD",
  "AS": "SA",
  "AD": "DA",
  "AO": "OA",
  "AI": "IA",
  "AQ": "QA",
  "AG": "GA",
  "AR": "RA",
  "AM": "MA",
  "AW": "WA",
  "AU": "UA",
  "AT": "TA",
  "AZ": "ZA",
  "BS": "SB",
  "BH": "HB",
  "BD": "DB",
  "BB": "BB",
  "BY": "YB",
  "BE": "EB",
  "BZ": "ZB",
  "BJ": "JB",
  "BM": "MB",
  "BT": "TB",
  "BO": "OB",
  "BQ": "QB",
  "BA": "AB",
  "BW": "WB",
  "BV": "VB",
  "BR": "RB",
  "IO": "OI",
  "BN": "NB",
  "BG": "GB",
  "BF": "FB",
  "BI": "IB",
  "KH": "HK",
  "CM": "MC",
  "CA": "AC",
  "CV": "VC",
  "KY": "YK",
  "CF": "FC",
  "TD": "DT",
  "CL": "LC",
  "CN": "NC",
  "CX": "XC",
  "CC": "CC",
  "CO": "OC",
  "KM": "MK",
  "CG": "GC",
  "CD": "DC",
  "CK": "KC",
  "CR": "RC",
  "CI": "IC",
  "HR": "RH",
  "CU": "UC",
  "CW": "WC",
  "CY": "YC",
  "CZ": "ZC",
  "DK": "KD",
  "DJ": "JD",
  "DM": "MD",
  "DO": "OD",
  "EC": "CE",
  "EG": "GE",
  "SV": "VS",
  "GQ": "QG",
  "ER": "RE",
  "EE": "EE",
  "ET": "TE",
  "FK": "KF",
  "FO": "OF",
  "FJ": "JF",
  "FI": "IF",
  "FR": "RF",
  "GF": "FG",
  "PF": "FP",
  "TF": "FT",
  "GA": "AG",
  "GM": "MG",
  "GE": "EG",
  "DE": "ED",
  "GH": "HG",
  "GI": "IG",
  "GR": "RG",
  "GL": "LG",
  "GD": "DG",
  "GP": "PG",
  "GU": "UG",
  "GT": "TG",
  "GG": "GG",
  "GN": "NG",
  "GW": "WG",
  "GY": "YG",
  "HT": "TH",
  "HM": "MH",
  "VA": "AV",
  "HN": "NH",
  "HK": "KH",
  "HU": "UH",
  "IS": "SI",
  "IN": "NI",
  "ID": "DI",
  "IR": "RI",
  "IQ": "QI",
  "IE": "EI",
  "IM": "MI",
  "IL": "LI",
  "IT": "TI",
  "JM": "MJ",
  "JP": "PJ",
  "JE": "EJ",
  "JO": "OJ",
  "KZ": "ZK",
  "KE": "EK",
  "KI": "IK",
  "KP": "PK",
  "KR": "RK",
  "KW": "WK",
  "KG": "GK",
  "LA": "AL",
  "LV": "VL",
  "LB": "BL",
  "LS": "SL",
  "LR": "RL",
  "LY": "YL",
  "LI": "IL",
  "LT": "TL",
  "LU": "UL",
  "MO": "OM",
  "MK": "KM",
  "MG": "GM",
  "MW": "WM",
  "MY": "YM",
  "MV": "VM",
  "ML": "LM",
  "MT": "TM",
  "MH": "HM",
  "MQ": "QM",
  "MR": "RM",
  "MU": "UM",
  "YT": "TY",
  "MX": "XM",
  "FM": "MF",
  "MD": "DM",
  "MC": "CM",
  "MN": "NM",
  "ME": "EM",
  "MS": "SM",
  "MA": "AM",
  "MZ": "ZM",
  "MM": "MM",
  "NA": "AN",
  "NR": "RN",
  "NP": "PN",
  "NL": "LN",
  "NC": "CN",
  "NZ": "ZN",
  "NI": "IN",
  "NE": "EN",
  "NG": "GN",
  "NU": "UN",
  "NF": "FN",
  "MP": "PM",
  "NO": "ON",
  "OM": "MO",
  "PK": "KP",
  "PW": "WP",
  "PS": "SP",
  "PA": "AP",
  "PG": "GP",
  "PY": "YP",
  "PE": "EP",
  "PH": "HP",
  "PN": "NP",
  "PL": "LP",
  "PT": "TP",
  "PR": "RP",
  "QA": "AQ",
  "RE": "ER",
  "RO": "OR",
  "RU": "UR",
  "RW": "WR",
  "BL": "LB",
  "SH": "HS",
  "KN": "NK",
  "LC": "CL",
  "MF": "FM",
  "PM": "MP",
  "VC": "CV",
  "WS": "SW",
  "SM": "MS",
  "ST": "TS",
  "SA": "AS",
  "SN": "NS",
  "RS": "SR",
  "SC": "CS",
  "SL": "LS",
  "SG": "GS",
  "SX": "XS",
  "SK": "KS",
  "SI": "IS",
  "SB": "BS",
  "SO": "OS",
  "ZA": "AZ",
  "GS": "SG",
  "SS": "SS",
  "ES": "SE",
  "LK": "KL",
  "SD": "DS",
  "SR": "RS",
  "SJ": "JS",
  "SZ": "ZS",
  "SE": "ES",
  "CH": "HC",
  "SY": "YS",
  "TW": "WT",
  "TJ": "JT",
  "TZ": "ZT",
  "TH": "HT",
  "TL": "LT",
  "TG": "GT",
  "TK": "KT",
  "TO": "OT",
  "TT": "TT",
  "TN": "NT",
  "TR": "RT",
  "TM": "MT",
  "TC": "CT",
  "TV": "VT",
  "UG": "GU",
  "UA": "AU",
  "AE": "EA",
  "GB": "BG",
  "US": "SU",
  "UM": "MU",
  "UY": "YU",
  "UZ": "ZU",
  "VU": "UV",
  "VE": "EV",
  "VN": "NV",
  "VG": "GV",
  "VI": "IV",
  "WF": "FW",
  "EH": "HE",
  "YE": "EY",
  "ZM": "MZ",
  "ZW": "WZ"
};
var dragonfruitInject = (require("../inject.js")).bind(testPairs);


describe("Handling of single inputs", function() {
  it("correctly translates single input of String", function() {
    expect(dragonfruitInject("AF")).toBe("FA");
  });

  it("correctly translates single input of String inside Array", function() {
    expect(dragonfruitInject(["AF"])).toBe("FA");
  });

  it("correctly translates single input of String inside Array inside Array", function() {
    expect(dragonfruitInject([
      ["AF"]
    ])).toBe("FA");
  });

  it("correctly translates single input of Object containing single true key", function() {
    expect(dragonfruitInject({
      "AF": true
    })).toBe("FA");
  });

  it("correctly translates single input of Object containing true and false keys", function() {
    expect(dragonfruitInject({
      "AF": true,
      "AX": false
    })).toBe("FA");
  });

  it("correctly translates single input of function returning String", function() {
    expect(dragonfruitInject(function() {
      return "AF"
    })).toBe("FA");
  });

  it("correctly translates single input of function returning Array of Object", function() {
    expect(dragonfruitInject(function() {
      return [{
        "AF": true,
        "AX": false
      }]
    })).toBe("FA");
  });
});


describe("Handling of multiple inputs", function() {
  it("correctly translates multiple inputs of String", function() {
    expect(dragonfruitInject("AF", "AX")).toBe("FA XA");
  });

  it("correctly translates multiple inputs of String inside Array", function() {
    expect(dragonfruitInject(["AF"],["AX"])).toBe("FA XA");
  });

  it("correctly translates multiple inputs of String inside Array inside Array", function() {
    expect(dragonfruitInject([
      ["AF"]
    ],[
      ["AX"]
    ])).toBe("FA XA");
  });

  it("correctly translates multiple inputs of Object containing single true key", function() {
    expect(dragonfruitInject({
      "AF": true
    }, {
      "AX": true
    })).toBe("FA XA");
  });

  it("correctly translates multiple inputs of Object containing true and false keys", function() {
    expect(dragonfruitInject({
      "AF": true,
      "AFFFF": false
    },{
      "AXXXXXX": false,
      "AX": true
    })).toBe("FA XA");
  });

  it("correctly translates multiple inputs of function returning String", function() {
    expect(dragonfruitInject(function() {
      return "AF"
    },function() {
      return "AX"
    })).toBe("FA XA");
  });

  it("correctly translates single input of function returning Array of Object", function() {
    expect(dragonfruitInject(function() {
      return [{
        "AF": true,
        "AX": true
      }]
    })).toBe("FA XA");
  });
});
