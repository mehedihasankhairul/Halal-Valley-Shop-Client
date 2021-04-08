// import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../../icons/logo1.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import { UserContext } from '../../App';


const Header = () => {
    // const [user]=useContext(UserContext)
    return (
        <Container>
        <div className= ' col-md-12'>
            <Grid container item xs={12} style={{padding:'10px 20px'}} alignItems='center' >
                
                <Grid item  xs={12}  md={6}>
                    <Link className='link' to='/'>
                        <img style={{height:'64px'}} src={logo} alt="volunteer network logo"/>
                    </Link>
                </Grid>
                
                <Grid container item xs={12} md={6} justify='space-between' alignItems='center' spacing={1} style={{paddingRight:'5px'}}>
                    <Grid item xs={12} md={2}><Link to='/' className='link text-decoration-none'><b>Home</b></Link></Grid>
                    <Grid item xs={12} md={2}><Link to='/orders' className='link text-decoration-none'><b>Orders</b></Link></Grid>
                    <Grid item xs={12} md={2}><Link to='/deals' className='link text-decoration-none'><b>Deals</b></Link></Grid>
                    {
                        // user.isSignedIn ? <Grid item xs={12} md={2}><p className='text-info pt-2 font-weight-bold'>{user.name || 'User'} </p></Grid>
                        
                         <Grid item xs={12} md={2} >
                            <Link to='/logIn' className='link text-decoration-none'>
                            <Button  variant="contained" className='bg-info text-white'> Login</Button>
                            </Link>
                        </Grid>
                    }
                    <Grid item xs={12} md={2}>
                    <Link to='/admin' className='link text-decoration-none'>
                        <Button variant="contained" className='bg-dark text-white'>Admin</Button>
                    </Link>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </Container>
    );
};

export default Header;