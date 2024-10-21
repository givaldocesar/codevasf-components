# codevasf-components
Componentes React para desenvolvimento de projetos WEB da CODEVASF

## Recursos
    -- React com Typescript 
    -- Sass 
    -- classNames

## Componentes
    --  Column:         Separa o layout em colunas;
    --  Title:          Cria um título;
    
    --  Header      Cria um Header;
        ╚> Brand:           Cria uma logomarca com um icone da CODEVASF. Aceita elementos filhos.
        ╚> Navbar:          Agrupa os "Menus" em uma barra de navegação horizontal.
        ╚> DropDownMenu:    Cria um dropdown menu, aceita Menu, como filhos.
            ---title:       <string>    Texto que aparecerá no menu.
            ---rootURL:     <string>    Se fornecido, ficará "ativo" se um menu filho estiver "ativo".
        ╚> Menu:                        Cria links dentro de uma "Navbar".
            ---href:        <string>    URL a qual o menu levará.

    --  Cards               Agrupa os 'Cards' e os gerencia.
        --  Card:           Cria um cartão animado para exibir informações.  
        --  CardContent:    Contéudo do 'Card', fica oculto quando o 'Card' está inativo.