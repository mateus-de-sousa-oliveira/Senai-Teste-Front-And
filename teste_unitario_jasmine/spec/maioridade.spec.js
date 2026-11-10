describe("Teste de validação - Maior idade", function(){

    it("Validação Maior Idade", function(){
        expect(maioridade(20)).toBe('Maior Idade');
    });
});

describe("Teste de validação - Menor idade", function(){
    it("Validação Menor Idade", function(){
        expect(maioridade(10)).toBe('Menor idade');
    });
});