import styled from 'styled-components';

export const InnerWrap = styled.div`
  max-width: 1300px;
  width: 90%;
  margin: auto;
`;

export const HeaderWrap = styled.div`
  width: 700px;
  max-width: 90%;
  text-align: center;
  margin: 0 auto;
  h2 {
    margin-bottom: 30px;
  }
  h5 {
    margin-bottom: 10px;
  }
`;

export const TextWrap = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 40px auto 80px;
  text-align: center;
  p {
    margin-top: 28px;
  }
  p:nth-child(1) {
    font-size: 2.6rem;
    margin-top: 0;
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
`;

export const MissionWrap = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 0 auto 150px;
  padding: 60px 80px;
  background: ${(props) => props.theme.colors.lightOrange};
  text-align: center;
  border-radius: 20px;
  h5 {
    display: inline-block;
    padding: 4px 8px;
    margin-bottom: 20px;
    color: white;
    background: ${(props) => props.theme.colors.orange};
    border-radius: 16px;
  }
  p {
    font-size: 2rem;
    margin-top: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
    padding: 40px 20px;
    p {
      font-size: 1.8rem;
    }
  }
`;

export const FormWrap = styled.div`
  max-width: 580px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  h5 {
    display: inline-block;
    font-size: 1.8rem;
    padding: 14px 18px;
    margin-bottom: 28px;
    color: white;
    background: ${(props) => props.theme.colors.blue};
    border-radius: 8px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    transform: translateY(-60px);
  }
`;

export const SubPageBody = styled.div`
  width: 850px;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  font-size: 1.6rem;
  color: #969ca0;
  letter-spacing: 0;
  line-height: 1.5;
  p {
    margin-top: 1.5em;
    &:nth-child(1) {
      margin-top: 0;
      font-weight: 700;
    }
  }
  ul {
    margin-top: 1.5em;
    list-style: disc;
    margin: 0 15px;
    li {
      margin: 5px;
    }
  }
  a {
    color: #337ab7;
    text-decoration: none;
  }
`;
