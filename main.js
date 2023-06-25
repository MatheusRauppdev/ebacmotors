
        /* Código para fazer rodar o carrosel de imagens através da tag ready
        que fará o carrosel somente após carregar todas as imagens */
        $(document).ready(function(){
             $('#carousel-imagens').slick({
                 autoplay: true
                });
                 $('.menu-hamburguer').click(function(){
                    $('nav').slideToggle();
                    });
        /* Mascaras para estilizar e dar criterios 
        para os campos do formulario */
        
                    $('#telefone').mask('(00) 00000-0000', {
                        placeholder: '(00)00000-0000'
                    });
                    
                    $('form').validate({
                        rules: {
                            nome: {
                                required: true
                            },
                            email: {
                                required: true, 
                                email: true
                            },
                            telefone: {
                                required: true
                            },
                            mensagem: {
                                required: true
                            },
                            VeiculoInteresse: {
                                required: false,    
                            }
                        },
                        messages: {
                            nome: 'por favor, insira o seu nome.'
                        },
                        submitHandler: function(form) {
                            console.log(form)
                        },
                        invalidHandler: function(evento, validador){
                            let camposIncorretos = validador.numberOfInvalids();
                            console.log(camposIncorretos);
                        }
                    })   
                    $('.lista-veiculos button').click(function(){
                        const destino = $('#contato');

                const nomeVeiculo = $(this).parent().find('h3').text();


                        $('html').animate({
                            scrollTop: destino.offset().top
                        }, 1000)
                    })
                })



      