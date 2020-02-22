import styled from 'styled-components';

export const View = styled.View`
  flex: 1;
`;

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Description = styled.Text`
  padding: 10px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0px;
`;
