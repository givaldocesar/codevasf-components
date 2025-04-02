# codevasf-components
Componentes React para desenvolvimento de projetos WEB da CODEVASF

## Recursos
    -- React com Typescript 
    -- Sass 
    -- classNames

## Componentes
    --  Column:                             Separa o layout em colunas;
    --  DecoratedLink:                      Link formatado com as especificações da CODEVASF.
   
    --  Popup:                              Cria uma Popup na tela;
        --->contentClassName    <string>    className para a caixa de conteúdo da Popup.
    
    --  ProgressBar                         Uma barra de progresso.
        --->barClassName:       <string>    Altera o estilo do pistão da barra.
        --->progress:           <number>    Progresso atual da barra.
        --->infinity:           <boolean>   Faz a barra carregar infinitamente em loop.
    
    --  SpinLoader:                         Um ícone de carregamento giratório.
    --  Title:                              Cria um título;
    
    --  Header      Cria um Header;
        ╚> Brand:           Cria uma logomarca com um icone da CODEVASF. Aceita elementos filhos.
        ╚> Navbar:          Agrupa os "Menus" em uma barra de navegação horizontal.
        ╚> DropDownMenu:    Cria um dropdown menu, aceita Menu, como filhos.
            ---:title:      <string>    Texto que aparecerá no menu.
            --->rootURL:    <string>    Se fornecido, ficará "ativo" se um menu filho estiver "ativo".
        ╚> Menu:                        Cria links dentro de uma "Navbar".
            --->href:       <string>    URL a qual o menu levará.

    --  Cards               Agrupa os 'Cards' e os gerencia.
        --  Card:           Cria um cartão animado para exibir informações.  
        --  CardContent:    Contéudo do 'Card', fica oculto quando o 'Card' está inativo.
    
    --  TabsArea:                                   Cria uma área com abas.
        --->tabsClassName   <string>                className para o 'div' contendo as abas.
        --->defaultTab      <number>                INTEIRO corresponde a aba padrão, default = 0;
        --->items           <Item[]>                 Items a serem exibidos como conteúdo de cada aba.
                                                        -title:     Texto que aparecerá na aba.
                                                        -content:   Contéudo que aparecerá ao ter sua aba ativada.
                                                        -onActive:  Funcão que será executada ao abrir a aba.
        
        OBS: A ordem das abas segue a ordem listada em 'items'.
    
    --  Form:               Formulário e itens pré-estilizados.
        --  FormTitle       Um título para o 'form'.
        --  FormRow         Linhas para o formulário.    
        --  FormButton      button pré-formatado
        --  FormInput       input pré-formatado
        --  FormLabel       label pré-formatada
        --  FormPassword    input para senhas com botão para mostrar/ocultar a senha
        --  CNPJInput       input para que verifica/valida CNPJ'S
    
    -- Icons:
        --- CloseIcon:         Ícone SVG em formato de X.
    
    -- User:
        --- Login                                   Formulário para login de usuário.
            ---> title          <ReactNode>         Titulo da tela de Login.
            ---> authenticator  <Authenticator>     Objeto Authenticator do Firebase.
            ---> validateUser   <(user: FirebaseUser | null, path?: string) => Promise<[User | null, string | null]>    Função para validação do usuário.
        
        --- LogoutButton                            Botão para executar Logout.
            ---> user           <User>              usuário a ser deslogado.
            ---> authenticator  <Authenticator>     Objeto Authenticator do Firebase.
            ---> parentPopup    <HTMLElement>       Elemento o qual o popup de logout pertencerá.
            
## Events
    -- PopupEvent:                  Evento utilizado para exibição e controle de Popups.
        --->popup:  <ReactNode>     Popup a ser exibida. 

## Authenticator
    -- Classe para usar os métodos de autenticação do firebase da Google Cloud.
    -- Necessário ter as variáveis de ambiente:
        --- NEXT_PUBLIC_API_KEY com a chave da api do firebase
        --- NEXT_PUBLIC_FIREBASE_DOMAIN com a url de domínio do firebase.

    ### Métodos
        signIn(email: string, password: string) => Promise<UserCredentials>
            --> Faz login do usuário e retorna suas credenciais.

## Firebase 
    -- Classe para usar os métodos de gerenciamento de usuários do firebase
 