/*Criando tabela com as 3 colunas uniciais*/
CREATE TABLE usuarios(
    nome VARCHAR(50),email VARCHAR(100),idade INT
);
/*Inserindo dados na coluna respectiva*/
INSERT INTO usuarios(nome,email,idade) VALUES(
    "Vinicius","viny@sql.com",20
);
INSERT INTO usuarios(nome,email,idade) VALUES(
    "Pedro","pedro@sql.com",8
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Vitor","vitor@sql.com",18
);
INSERT INTO usuarios(nome,email,idade) VALUES(
    "Mathias","mat@sql.com",34
);




/*Selecione quem tem 8 anos de idade*/

SELECT * FROM usuarios WHERE idade=8;


/*Selecione quem tem o nome "Mathias"*/

SELECT * FROM usuarios WHERE nome="Mathias";

/*Deletar da tabela usuarios onde o nome ="Vinicius*/

DELETE FROM usuarios WHERE nome="Vinicius";