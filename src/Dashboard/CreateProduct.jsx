import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DashboardWrapper from './Components/DashboardWrapper';
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { MdDeleteOutline } from "react-icons/md";
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { IoAddCircleOutline } from "react-icons/io5";
import ImageLazyLoading from "../PagesComponents/Components/ImageLazyLoading";
import { FiPlus } from "react-icons/fi";
import { useEffect } from 'react';
import axios from 'axios';
import ServerUrl from '../Pages/ServerUrl';
import { toast } from 'react-toastify';


function createData(id, name, calories, fat, carbs, protein) {
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

const rows = [
    createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
    createData(2, 'Donut', 452, 25.0, 51, 4.9),
    createData(3, 'Eclair', 262, 16.0, 24, 6.0),
    createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
    createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
    createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
    createData(9, 'KitKat', 518, 26.0, 65, 7.0),
    createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
    createData(11, 'Marshmallow', 318, 0, 81, 2.0),
    createData(12, 'Nougat', 360, 19.0, 9, 37.0),
    createData(13, 'Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Nutrition
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <MdDeleteOutline />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

function CreateProduct() {
    const [selectedImages, setSelectedImages] = React.useState([]);
    const [ProductImage, setProductImage] = React.useState(null);
    const [LoadedData, setLoadedData] = React.useState({ series: [], categories: [], subcategories: [] });

    const [productName, setProductName] = React.useState(null);
    const [productCategorie, setProductCategorie] = React.useState(null);
    const [productSubCategorie, setProductSubCategorie] = React.useState(null);
    const [ProductSerie, setProductSerie] = React.useState(null);
    const [ProductPrice, setProductPrice] = React.useState(null);
    const [ProductBrand, setProductBrand] = React.useState(null);
    const [ProductDescription, setProductDescription] = React.useState(null);



    function AddImage() {
        if (ProductImage !== null) {
            setSelectedImages(prev => [...prev, ProductImage]);
            setProductImage(null);
        }
    }

    function makeid(length) {
         let result = Math.floor(Math.random() * 9000000069696*length) 
        return result;
    }


    async function PostData(e) {
        e.preventDefault();
        try {
            if (productName !== null && productCategorie !== null && productSubCategorie !== null
              && ProductBrand !== null && ProductDescription !== null) {

                const INPUTS =  {
                    name: productName,
                    price: ProductPrice,
                    oldprice: null,
                    description: ProductDescription,
                    category: productCategorie,
                    subcategorie: productSubCategorie,
                    code: makeid(90),
                    brand: ProductBrand,
                    serie: ProductSerie,
                };     
            
                let response = await axios.post(ServerUrl() + "htmarketregisternewproduct", INPUTS); 
                console.clear(INPUTS);
                console.log("#####################################");
                console.log(response.data);
                console.log("#####################################");
            
                setProductDescription(null);
                setProductName(null);
                setSelectedImages([]);

                if (selectedImages.length > 0) { 
                        for (let i = 0; i < selectedImages.length; i++) {
                            const img = selectedImages[i];
                            let addImage = await axios.post(ServerUrl()+"htmarketuploadimages", {name:img, code:response.data._id}); 
                            console.log(addImage.data);
                            if(i+1 ===  selectedImages.length) {
                                toast.success('Produto adicionado com sucesso', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light", 
                                });
                            }
                        }  
                } else {
                    toast.success('Produto adicionado com sucesso', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light", 
                    });
                }  
            } else {
             alert("Preencha corretamente os campos !")
            } 
        } catch (error) {
           alert("error")
           console.clear()
           console.log(error)
        }
    }

    async function LoadData() {
        try {
            let response = await axios.get(ServerUrl() + "htmarketgetallelements");
            console.clear()
            console.log("#####################################");
            console.log(response.data);
            setLoadedData(response.data)
            console.log("#####################################");

        } catch (error) {
            console.clear()
            console.log(error)
        }
    }

    useEffect(() => {
        LoadData();
    }, []);


    return (
        <div>
            <DashboardWrapper active={1} title="Produtos" content={
                <section className='col'>
                    <div className="box">
                        <div className="title">Adicionar produtos</div>
                        <Form className='product-form'  onSubmit={PostData} >
                            <div className='col'>
                                <div className="ed-flex space">
                                    <Form.Group className="mb-3 col" controlId="formBasicEmail">
                                        <Form.Label>Nome do produto  <span className='text-danger'>*</span></Form.Label>
                                        <Form.Control value={productName} onPaste={(e)=>setProductName(e.target.value)} onChange={(e)=>setProductName(e.target.value)} type="text" placeholder="..." />
                                    </Form.Group>
                                    <div className="pd"></div>
                                    <Form.Group className="mb-3 col" controlId="formBasicEmail">
                                        <Form.Label>Marca <span className='text-danger'>*</span> </Form.Label>
                                        <Form.Select   onChange={(e)=>setProductBrand(e.target.value)}  required>
                                            <option disabled selected>Selecionar marca</option>
                                            <option value="Comprag">Comprag</option>
                                            <option value="Elgi">Elgi</option>
                                            <option value="Infinity">Infinity</option>
                                            <option value="Jork">Jork</option>
                                            <option value="Aignep">Aignep</option>
                                            <option value="Bigiessie">Bigiessie</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="d-flex space">
                                    <Form.Group className="mb-3 col" controlId="formBasicEmail">
                                        <Form.Label>Preço</Form.Label>
                                        <Form.Control onPaste={(e)=>setProductPrice(e.target.value)} step=".01"  onChange={(e)=>setProductPrice(e.target.value)}  type="number" placeholder="..." />
                                    </Form.Group>
                                    <div className="pd"></div>
                                    <Form.Group className="mb-3 col" controlId="formBasicEmail">
                                        <Form.Label>Categoria <span className='text-danger'>*</span> </Form.Label>
                                        <Form.Select onChange={(e)=>setProductCategorie(e.target.value)}  required>
                                            <option disabled selected>Selecionar categoria</option>
                                            {LoadedData.categories.map((item) => (
                                                <option value={item._id}>{item.categorie_title}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="d-flex space">
                                    <Form.Group className="mb-3 col" controlId="formBasicEmail">
                                        <Form.Label>Subcategoria <span className="text-danger">*</span> </Form.Label>
                                        <Form.Select onChange={(e)=>setProductSubCategorie(e.target.value)}   required>
                                            <option disabled selected>Selecionar subcategoria</option>
                                            {LoadedData.subcategories.map((item) => (
                                                <option value={item._id}>{item.subcategorie_name}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <div className="pd"></div>
                                    <Form.Group className="mb-3 col" controlId="formBasicEmail">
                                        <Form.Label>Série</Form.Label>
                                        <Form.Select onChange={(e)=>setProductSerie(e.target.value)}>
                                            <option disabled selected>Selecionar serie</option>
                                            {LoadedData.series.map((item) => (
                                                <option value={item._id}>{item.serie_name}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </div> 

                                 <br />
                                  <div className="textarea-editor"></div>
                                 <br /> 

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Descrição  <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control value={ProductDescription}  as="textarea" onPaste={(e)=>setProductDescription(e.target.value)} 
                                     onChange={(e)=>setProductDescription(e.target.value)}  rows={3} required placeholder="..." />
                                </Form.Group>
                                <Button className='bg-main' type="submit">
                                    Guardar
                                </Button>
                            </div>
                            <div className='uploads' >
                                <div className="d-flex mb-3">
                                    <Form.Group className="mb-3 col" controlId="formBasicEmail">
                                        <Form.Label>Imagens do produto </Form.Label>
                                        <Form.Control type="url" onPaste={(e) => setProductImage(e.target.value)} onChange={(e) => setProductImage(e.target.value)}
                                        className='col' value={ProductImage} placeholder="Insira o link da imagem..." />
                                    </Form.Group>
                                    <div className="btn bg-black text-light ml-2" onClick={() => AddImage()} >+</div>
                                </div>
                                <div className="images-wrapper">
                                    {selectedImages.map((item) => {
                                        return (
                                            <div className="image">
                                                <ImageLazyLoading source={item} height={110} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </Form>
                    </div>
                    <br />
                    <div className="box col">
                        <EnhancedTable />
                    </div>
                </section>} />
        </div>
    )
}

export default CreateProduct