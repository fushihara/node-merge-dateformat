"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateformat = require("dateformat");
function テキストを1行づつに分割(テキスト) {
    return テキスト.split("\n");
}
function mergeHeaderDateformat(マージ対象テキスト, 日付フォーマット = "yyyy/mm/dd(ddd)HH:MM:ss.l", 曜日の言語 = "en") {
    if (曜日の言語 == "en") {
        dateformat.i18n.dayNames = [
            'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
    }
    else {
        dateformat.i18n.dayNames = [
            '日', '月', '火', '水', '木', '金', '土',
            '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'
        ];
    }
    const 接頭語 = dateformat(new Date(), 日付フォーマット);
    return テキストを1行づつに分割(マージ対象テキスト).map(a => `${接頭語} ${a}`).join("\n");
}
exports.mergeHeaderDateformat = mergeHeaderDateformat;
;
//# sourceMappingURL=index.js.map