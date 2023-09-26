function calcularCustoEMargem() {
    const custoMateriaPrima = parseFloat(document.getElementById("materia-prima").value) || 0;
    const custoMaoDeObra = parseFloat(document.getElementById("mao-de-obra").value) || 0;
    const valorVenda = parseFloat(document.getElementById("valor-venda").value) || 0;

    const custoProduto = custoMateriaPrima + custoMaoDeObra;
    const margemLucro = ((valorVenda - custoProduto) / valorVenda) * 100;

    document.getElementById("resultado-custo").textContent = `Custo do Produto: R$ ${custoProduto.toFixed(2)}`;
    document.getElementById("resultado-margem").textContent = `Margem de Lucro: ${margemLucro.toFixed(2)}%`;

    if (margemLucro <= 25) {
        alert('Atenção: Sua margem de lucro está muito abaixo de 30%');
        document.getElementById("bom").textContent = '';
    }
    if (margemLucro >= 30) {
        document.getElementById("bom").textContent = `Margem de Lucro Bom `;
    }
}
