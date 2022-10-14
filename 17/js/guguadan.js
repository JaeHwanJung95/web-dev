for(let i = 1; i <= 9; i++) {
    // i - 단
    document.write("<div>");
    document.write(`<h3>${i}단</h3>`);
    for(let j = 1; j <= 9; j++) {
        document.write(`<p>${i} X ${j} = ${i*j} </p>`);
    }
    document.write("</div>");
}