let alessandro = {
    'nome' : 'Alessandro',
    'cognome' : 'Consoli',
    'età' : 42,
    'saluta' : function() {
        console.log(`Ciao a tutti sono ${this.nome} ${this.cognome} ed ho ${this.età} anni!`);
        
    }
};

alessandro.saluta();
