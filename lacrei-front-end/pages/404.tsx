"use client";

import styled from '@emotion/styled';

const Section = styled.section`
  background: linear-gradient(to right, #dbeafe, #f3e8ff, #fce7f3);
  padding: 4rem 1rem;
  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: rgb(1, 135, 98);
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Paragraph = styled.p`
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

const Link = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: rgb(1, 135, 98);
  border-radius: 0.375rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #047857;
  }
`;

export function Custom404() {
    return (
        <Section>
            <Container>
                <Title>Opa! Essa página ainda não existe.</Title>
                <Paragraph>
                    Nosso time ainda está trabalhando na construção dessa página. Enquanto isso, você pode se cadastrar como paciente ou profissional.
                </Paragraph>
                <Link href="/">Voltar para o início</Link>
            </Container>
        </Section>
    );
}