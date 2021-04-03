let num = 1;
let q = {
    1 : {"title" : "문제1번", "type" : "AD", "A" : "A", "B" : "D"},
    2 : {"title" : "문제2번", "type" : "AD", "A" : "A", "B" : "D"},
    3 : {"title" : "문제3번", "type" : "AD", "A" : "A", "B" : "D"},
    4 : {"title" : "문제4번", "type" : "NF", "A" : "N", "B" : "F"},
    5 : {"title" : "문제5번", "type" : "NF", "A" : "N", "B" : "F"},
    6 : {"title" : "문제6번", "type" : "NF", "A" : "N", "B" : "F"},
    7 : {"title" : "문제7번", "type" : "HB", "A" : "H", "B" : "B"},
    8 : {"title" : "문제8번", "type" : "HB", "A" : "H", "B" : "B"},
    9 : {"title" : "문제9번", "type" : "HB", "A" : "H", "B" : "B"},
    10 : {"title" : "문제10번", "type" : "RN", "A" : "R", "B" : "N"},
    11 : {"title" : "문제11번", "type" : "RN", "A" : "R", "B" : "N"},
    12 : {"title" : "문제12번", "type" : "RN", "A" : "R", "B" : "N"},
};

let result = {
    "ANHR" : {"player":"지루", "explain":"설명", "img":"img.jpg"},
    "ANHN" : {"player":"베르너", "explain":"설명", "img":"img.jpg"},
    "ANNHN" : {"player":"타미", "explain":"설명", "img":"img.jpg"},
    "ANBR" : {"player":"퓰리식", "explain":"설명", "img":"img.jpg"},
    "ANBN" : {"player":"오도이", "explain":"설명", "img":"img.jpg"},
    "AFHR" : {"player":"마운트", "explain":"설명", "img":"img.jpg"},
    "AFHN" : {"player":"제임스", "explain":"설명", "img":"img.jpg"},
    "AFBR" : {"player":"지예흐", "explain":"설명", "img":"img.jpg"},
    "AFBN" : {"player":"하베르츠", "explain":"설명", "img":"img.jpg"},
    "DNHR" : {"player":"코바치치", "explain":"설명", "img":"img.jpg"},
    "DNHN" : {"player":"캉테", "explain":"설명", "img":"img.jpg"},
    "DNNHN" : {"player":"칠웰", "explain":"설명", "img":"img.jpg"},
    "DNBR" : {"player":"조르지뉴", "explain":"설명", "img":"img.jpg"},
    "DNNBN" : {"player":"알론소", "explain":"설명", "img":"img.jpg"},
    "DNBN" : {"player":"길모어", "explain":"설명", "img":"img.jpg"},
    "DFHR" : {"player":"뤼디거", "explain":"설명", "img":"img.jpg"},
    "DFNHN" : {"player":"주마", "explain":"설명", "img":"img.jpg"},
    "DFHN" : {"player":"멘디", "explain":"설명", "img":"img.jpg"},
    "DFNBR" : {"player":"탄코", "explain":"설명", "img":"img.jpg"},
    "DFBR" : {"player":"실바", "explain":"설명", "img":"img.jpg"},
    "DFNBN" : {"player":"크리스텐센", "explain":"설명", "img":"img.jpg"},
    "DFBN" : {"player":"케파", "explain":"설명", "img":"img.jpg"}
}

function start(){
    $(".start").hide();
    $(".question").show();
    next();
}    

$("#A").click(function(){
    let type = $("#type").val();
    let typeId = $("#"+type).val(); 
    $('#'+type).val(parseInt(typeId)+1);
    next();
});
$("#B").click(function(){
    next();
});        


function next() {
    if (num == 13) {
        $(".question").hide();
        $(".result").show();

        let player = "";
        ($("#AD").val() < 2 ? player += "D" : player += "A");
        if ($("#NF").val() > 2) {
            if ($("#NF").val() == 2){
                player += "N"
            } else {
                player += "NN"
            }
        } else {
            player += "F"
        }
        ($("#HB").val() < 2 ? player += "B" : player += "H");
        ($("#RN").val() < 2 ? player += "N" : player += "R");
        
        // $("#img").attr("src", result[player]["img"]);
        $("#player").html(result[player]["player"]);
        $("#explain").html(result[player]["explain"]);

    } else {
        $(".progress-bar").attr("style", "width: calc(100/12*"+num+"%)");
        $("#type").val(q[num]["type"]);
        $(".question_title").html(q[num]["title"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num ++;
    }
}
