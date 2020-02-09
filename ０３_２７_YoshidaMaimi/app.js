
const GU = 1;
const CHOKI = 2;
const PA = 3;
// ジャンケンの入力ダイアログボックスを表示
let hum = prompt('半角数字で１～３の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
hum = parseInt(hum, 10);
//入力値のチェック
if (hum !== GU && hum !== CHOKI && hum !== PA) {
    //入力値が不適切な場合
    alert('入力値をうまく認識できませんでした。ブラウザを再度読み込みすると、もう一度挑戦できます。');
} else {
    //コンピュータの手を決める
    let com = Math.floor(Math.random() * 3 + 1);
    //コンピュータの手の名前
    let comHandName = '';
    switch (com) {
        case GU:
            comHandName = 'グー';
            break;
        case CHOKI:
            comHandName = 'チョキ';
            break;
        case PA:
            comHandName = 'パー';
            break;
    }

    //結果の判定
    let msgResult = '';
    if (hum === com) {
        msgResult = '結果はあいこでした。';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
        msgResult = '勝ちました。';
    } else {
        msgResult = '負けました。';
    }
    // 最終的な結果の表示
    msgResult = msgResult + 'コンピュータの出した手は「' + comHandName + '」でした';
    alert(msgResult);
}

function janken() {
    //selectedクラスが指定されているHTMLエレメントが一つもない場合はエラーを表示してこの関数を終了する。
    if ($(".selected").length === 0) {
        alert("自分の手を選択してください。");
        return;
    }
    //乱数で0,1,2のどれかを作成する。
    var evalue = Math.floor(Math.random() * 3.0);
    //相手の手の1つ前の画像を削除する。
    $("#enemy").remove();
    //相手の手を表示する。
    $("#enemyPanel").append("<img id='enemy' src='..//０３_２７_YoshidaMaimi/img/janken" + evalue + ".png ' />");

    //自分の手として選択されている画像のファイル名を取得する。
    var pfilename = $(".selected").attr("src");

    //画像のファイル名から正規表現を用いて、数字の部分だけを抽出する。
    var pvalue = pfilename.match(/\d/)[0];

    // //数字の引き算によって勝敗を判別する。以下の計算式によって、引き分けは0,勝ちは1,負けは2の数字がresult変数に入る。
    var result = (pvalue + 3 - evalue) % 3;

    //HTMLのresultという名前のIDをもつHTMLエレメントに、文字を表示する。
    //文字は配列になっていて、result変数の中の数字に該当する文字が表示される。例えば、result=1の場合、2番目の文字である"勝ち"が表示される。
    $("#result").text(["引き分け", "勝ち", "負け"][result]);
}

//プレイヤの手の画像をクリックしたときに呼ばれる関数
function onClickPlayerIcon(self) {
    //すでにselectのクラス値が与えられているHTMLエレメントのselectedを消去する
    $(".selected").each(function () {
        $(this).toggleClass("selected");
    });
    //クリックされたHTMLエレメントにselectedのクラス値を与える。
    $(self).toggleClass("selected");
}
