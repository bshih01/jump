function toggleText() {
    let direction = $("#jumpButton").text() == "JUMP >" ? 'right' : 'left';

    if (direction == 'right') {
        $("#rightTextbox").text($("#leftTextbox").text());
        $("#leftTextbox").text('');
        $("#jumpButton").text('< JUMP');
    } else {
        $("#leftTextbox").text($("#rightTextbox").text());
        $("#rightTextbox").text('');
        $("#jumpButton").text('JUMP >');
    }
}
