import { Box, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Copyright } from '@material-ui/icons';

export default function Home(): JSX.Element {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Monika Rozwadowska personal page
                </Typography>
                <Copyright />
            </Box>
        </Container>
    );
}
