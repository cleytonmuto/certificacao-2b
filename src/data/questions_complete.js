const data = [
  {
    category: 'Java',
    questions: [
      {
        question: 'Qual a sintaxe correta para imprimir "Hello World" em Java?',
        options: ['print("Hello World");', 'echo("Hello World");', 'System.out.println("Hello World");', 'Console.WriteLine("Hello World");'],
        answer: 'System.out.println("Hello World");',
        tip: 'Depende de uma biblioteca de sistema',
      },
      {
        question: 'Como se insere comentários de linhas em Java?',
        options: ['// Isto é um comentário', '# Isto é um comentário', '(* Isto é um comentário *)', '<-- Isto é um comentário -->'],
        answer: '// Isto é um comentário',
        tip: 'É o mesmo padrão de comentários de C/C++',
      },
      {
        question: 'Qual é o tipo de variável utilizado para armazenar texto em Java?',
        options: ['string', 'String', 'varchar', 'text'],
        answer: 'String',
      },
      {
        question: 'Como se cria uma variável inteira para armazenar 5 em Java?',
        options: ['integer x = 5;', 'number x = 5;', 'num x = 5;', 'int x = 5;'],
        answer: 'int x = 5;',
      },
      {
        question: 'Qual método pode ser usado para determinar o comprimento de uma string em Java?',
        options: ['len()', 'length()', 'getSize()', 'size()'],
        answer: 'length()',
      },
    ],
  },
  {
    category: 'Python',
    questions: [
      {
        question: 'Qual a sintaxe correta para imprimir "Hello World" em Python?',
        options: ['print("Hello World")', 'echo("Hello World")', 'System.out.println("Hello World")', 'Console.WriteLine("Hello World")'],
        answer: 'print("Hello World")',
        tip: 'É bem simples imprimir algo em Python',
      },
      {
        question: 'Qual destas variáveis NÃO é aceita em Python?',
        options: ['my_var', '_myvar', 'MyVar', 'my-var'],
        answer: 'my-var',
        tip: 'Nem todos símbolos especiais são aceitos'
      },
      {
        question: 'Qual é a extensão de arquivos Python?',
        options: ['.py', '.pt', '.pyth', '.pyt'],
        answer: '.py',
      },
      {
        question: 'Qual é a maneira correta de criar a função "executar()" em Python?',
        options: ['function executar():', 'def executar():', 'create executar():', 'void executar():'],
        answer: 'def executar():',
      },
      {
        question: 'Qual é a função utilizada para remover espaços em branco no início e no final de uma string em Python?',
        options: ['strip()', 'splice()', 'trim()', 'ptrim()'],
        answer: 'trim()',
      },
    ],
  },
  {
    category: 'C++',
    questions: [
      {
        question: 'Qual a sintaxe correta para imprimir "Hello World" em C++?',
        options: ['print("Hello World");', 'cout << "Hello World" << endl;', 'System.out.println("Hello World");', 'Console.WriteLine("Hello World");'],
        answer: 'cout << "Hello World" << endl;',
      },
      {
        question: 'Como se cria uma variável real para armazenar 2.34 em C++?',
        options: ['x = 2.34;', 'real x = 2.34;', 'double x = 2.34;', 'numfloat x = 2.34;'],
        answer: 'double x = 2.34;',
      },
      {
        question: 'Qual cabeçalho permite trabalhar com entrada via teclado em C++?',
        options: ['#include <iostream>', '#include <cstring>', '#include <inputstr>', '#include <scanner>'],
        answer: '#include <iostream>',
      },
      {
        question: 'Qual é a maneira correta de criar a função "executar()" em C++?',
        options: ['function executar()', 'def executar()', 'static executar()', 'void executar()'],
        answer: 'void executar()',
      },
      {
        question: 'Qual a maneira correta de criar e instanciar um objeto myObj do tipo MyClass em C++?',
        options: ['class MyClass = new myObj();', 'new myObj = MyClass();', 'class myObj = new MyClass();', 'MyClass myObj = new MyClass();'],
        answer: 'MyClass myObj = new MyClass();',
      },
    ],
  },
];

export default data;
