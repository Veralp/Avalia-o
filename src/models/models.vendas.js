class Vendas {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.matricula = i.matricula
        
    }
    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.valor = i.valor
        
    }
    constructor(i) {
        this.id = i.id
        this.data = i.data
        this.quantidade = i.quantidade
        this.produto = i.produto
        
    }

    
    //Métodos CRUD

    create() {
        return `INSERT INTO vendas VALUE(default,'${this.nome}',},${this.matricula})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendas`
        else
            return `SELECT * FROM vendas WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE vendas SET nome = '${this.nome}', , matricula = ${this.matricula} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM vendas WHERE id = ${this.id}`
    }


    create() {
        return `INSERT INTO vendas VALUE(default,'${this.nome}',,${this.valor})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendas`
        else
            return `SELECT * FROM vendas WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE vendas SET nome = '${this.nome}', valor = ${this.valor} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM vendas WHERE id = ${this.id}`
    }
    create() {
        return `INSERT INTO vendas VALUE(default,'${this.data}','${this.quantidade}',${this.produto})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendas`
        else
            return `SELECT * FROM vendas WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE vendas SET nome = '${this.data}', quantidade= '${this.quantidade}', produto = ${this.produto},  WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM vendas WHERE id = ${this.id}`
    }


    //Métodos de cálculo
    

module.exports = Paciente 