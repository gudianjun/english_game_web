
import { Box } from '@mui/material';
import './Login.css';
import TopNavigation from './TopNavigation';
import GameCard from './GameCard';


const Homepage = () => {
  return (
    <Box key={"aaaaaa"}
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        top: 0,
        left: 0,
        overflow: 'hidden',
      }}>
      <TopNavigation />
      <Box sx={{
        p: 10,
        display: 'flex',
        flexWrap: 'wrap', // 允许子元素换行
        // flex: 1, // 这个可以保留，如果希望Box填满父容器剩余空间
        // flexDirection: 'column', // 如果希望卡片水平排列然后换行，应移除或改为 'row' (默认)
        overflow: 'auto', // 如果内容超出Box，允许滚动，而不是hidden
        gap: 3, // (可选) 在卡片之间添加间距，theme.spacing(2) = 16px
        // justifyContent: 'flex-start', // (可选) 控制水平对齐，默认就是flex-start
        // alignItems: 'flex-start', // (可选) 控制垂直对齐（在换行时）ß
      }}>
        {/* 在这里放入您的 Card 组件 */}
        <GameCard gameName="Card 1" gameDescription="Card 1aaaaaaaaaaaaaaaaaa1aaaaaa  aaaaaaaa  aaaa1aaaaaaaaaaaaaaaaaa" gameImage="/games/image.jpg" />
        <GameCard gameName="Card 2" gameDescription="Card 2" gameImage="/games/image.jpg" />
        <GameCard gameName="Card 3" gameDescription="Card 3" gameImage="/games/image.jpg" />
        <GameCard gameName="Card 4" gameDescription="Card 4" gameImage="/games/image.jpg" />
        <GameCard gameName="Card 5" gameDescription="Card 5" gameImage="/games/image.jpg" />
        {/* ...更多 Card */}
      </Box>
    </Box>
  );
};

export default Homepage; 
