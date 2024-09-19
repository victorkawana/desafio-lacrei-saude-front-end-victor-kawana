import styled from 'styled-components';

const HeroSection = styled.section`
    background: linear-gradient(to right, #dbeafe, #f3e8ff, #fce7f3);
    padding: 4rem 1rem;

    @media (min-width: 768px) {
        padding: 6rem 1rem;
    }
`;

const HeroContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

const HeroTitle = styled.h1`
    font-size: 2.25rem;
    font-weight: bold;
    color: rgb(1, 135, 98);
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

const HeroDescription = styled.p`
    font-size: 1.125rem;
    color: #4a5568;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`;

const Button = styled.a`
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: rgb(1, 135, 98);
    border-radius: 0.375rem;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #047857;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
`;

export function HeroPacients() {
    return (
        <HeroSection>
            <HeroContent>
                <HeroTitle>Cuidado de Saúde Inclusivo para Pacientes LGBTQIAPN+</HeroTitle>
                <HeroDescription>
                    Encontre profissionais de saúde qualificados e acolhedores, proporcionando experiências de cuidado seguras e inclusivas para a comunidade LGBTQIAPN+.
                </HeroDescription>
                <Button href="https://paciente.lacreisaude.com.br/">Cadastre-se como Paciente</Button>
            </HeroContent>
        </HeroSection>
    );
}