import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { FixedSizeList as List } from 'react-window';
import Downshift from 'downshift';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import OffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    inputLabel: {
        fontSize: '14px'
    },
    textField: {
        width: '100%'
    },
    container: {
        marginLeft: '10px',
        width: 300,
        position: 'relative'
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        width: 300,
        zIndex: 9999,
        marginTop: theme.spacing()
    },
    suggestion: {
        display: 'block',
        width: '100%',
        padding: 5
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
        overflow: 'auto',
        border: '1px solid #ccc',
        overflowX: 'hidden'
    },
    itemHighlightedSelected: {
        paddingLeft: 5,
        paddingTop: 5,
        listStyleType: 'none',
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        fontWeight: 'bold'
    },
    itemHighlighted: {
        paddingLeft: 5,
        paddingTop: 5,
        listStyleType: 'none',
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        fontWeight: 'normal'
    },
    itemSelected: {
        paddingLeft: 5,
        paddingTop: 5,
        listStyleType: 'none',
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    },
    item: {
        paddingLeft: 5,
        paddingTop: 5,
        listStyleType: 'none',
        backgroundColor: 'transparent',
        fontWeight: 'normal'
    },
    icon: {
        padding: 0
    }
});

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.oneselected = null;
        this.state = {
            isMenuOpen: false,
        };
    }
    handleOpenEvent = () => {
        this.setState({ isMenuOpen: true });
    };
    handleCloseEvent = () => {
        this.setState({ isMenuOpen: false });
    };
    handleDownshiftChange = selection => {
        this.props.onSelected(selection);
        this.setState({ isMenuOpen: false, selectedItem: selection });
    };
    handleDownshiftStateChange = changes => {
        if (changes.isOpen) {
            this.setState({ isMenuOpen: changes.isOpen });
        }
    };
    handleClickClear = () => {
        this.props.onSelected(null);
        this.setState({ isMenuOpen: false, selectedItem: null });
    };
    handleKeydown(event, highlightedIndex) {
        if (event.key === 'Enter' && this.oneselected != null) {
            this.props.onSelected(this.oneselected);
            this.setState({ isMenuOpen: false, selectedItem: this.oneselected });
        } else if ((event.key === 'Enter' || event.key === 'Escape') && !highlightedIndex && !this.state.selectedItem) {
            this.props.onSelected(null);
            this.setState({ isMenuOpen: false, selectedItem: null });
        } else if (event.key === 'Tab' || event.key === 'Enter' || event.key === 'Escape') {
            this.setState({ isMenuOpen: false });
        }
    }

    calculateListHeight(listSize, height) {
        let calculated = listSize * 35;
        return calculated > height ? height : calculated;
    }

    row(props, item, selectedItem, highlightedIndex, getItemProps) {

        const { classes } = this.props;
        let classname = highlightedIndex === props.index ?
            selectedItem === item ? classes.itemHighlightedSelected
                : classes.itemHighlighted
            : selectedItem === item ? classes.itemSelected : classes.item;
        var itemProps = {
            ...getItemProps({
                key: item.id,
                index: props.index,
                item,
                style: props.style
            })
        };
        return <div className={classname} {...itemProps}>{item.name}</div>;
    }

    renderList(items, inputValue, getItemProps, selectedItem, highlightedIndex, classes, height) {
        var list =
            inputValue.length === 0
                ? items
                : items.filter(
                    suggestion =>
                        suggestion.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 ||
                        suggestion.id.toString().indexOf(inputValue) !== -1
                );

        if (list.length === 1) {
            this.oneselected = list[0];
        }
        else {
            this.oneselected = null;
        }

        return (
            <Paper className={classes.suggestionsContainerOpen} square>
                <div className={classes.suggestionsList} style={{ maxHeight: height ? height : 330 }}>
                    {
                        <List height={this.calculateListHeight(list.length, height)} itemCount={list.length} itemSize={35} width={300}>
                            {props => this.row(props, list[props.index], selectedItem, highlightedIndex, getItemProps)}
                        </List>
                    }
                </div>
            </Paper>
        );
    }
    getTextfieldValue() {
        return this.state.selectedItem ? this.state.selectedItem.name : '';
    }

    renderInput(classes, getInputProps, highlightedIndex) {
        return (
            <div>
                <FormLabel>{this.props.label}</FormLabel>
                <TextField
                    value={this.getTextfieldValue()}
                    onFocus={this.handleOpenEvent}
                    onKeyDown={event => this.handleKeydown(event, highlightedIndex)}
                    fullWidth
                    className={classes.textField}
                    InputProps={{
                        ...getInputProps({
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton className={classes.icon} aria-label='Slett valg' onClick={this.handleClickClear}>
                                        <OffIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            classes: {
                                input: classes.input
                            }
                        })
                    }}
                />
            </div>
        );
    }

    render() {
        const { classes, items, height } = this.props;
        return (
            <Downshift
                selectedItem={this.state.selectedItem}
                isOpen={this.state.isMenuOpen}
                onStateChange={this.handleDownshiftStateChange}
                onOuterClick={this.handleCloseEvent}
                onChange={this.handleDownshiftChange}
                itemToString={item => (item ? item.name : '')}
            >
                {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex, selectedItem }) => (
                    <div className={classes.container}>
                        {this.renderInput(classes, getInputProps, highlightedIndex)}
                        {isOpen ? this.renderList(items, inputValue, getItemProps, selectedItem, highlightedIndex, classes, height) : null}
                    </div>
                )}
            </Downshift>
        );
    }
}

export default withStyles(styles)(Autocomplete);
