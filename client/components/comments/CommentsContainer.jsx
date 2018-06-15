import React, { Component } from 'react';
import FilterBar from './FilterBar';
import Comments from './Comments';
import styles from './CommentsContainer.scss';
import axios from 'axios';
import { API_BASE_URL } from 'config';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CommentsContainer extends Component {
    static propTypes = {
        lastUpdated: PropTypes.number,
        searchText: PropTypes.string
    }

    constructor(props){
        super(props);

        this.state = {
            comments: []
        };

        this.onRefresh = this.onRefresh.bind(this);
    }

    componentWillMount(){
        this.onRefresh();
    }

    componentDidUpdate(prevProps){
        if (this.props.lastUpdated !== prevProps.lastUpdated || this.props.searchText !== prevProps.searchText){
            this.onRefresh();
        }
    }

    onRefresh() {
        const { searchText } = this.props;

        axios.get(`${API_BASE_URL}/comments`, { params: { searchText } })
            .then(response => this.setState({comments : response.data.map(
                (item, index) => Object.assign({}, item, { id: index }))
            }));
    }

    render() {
        const { comments } = this.state;

        return <div className={styles.container}>
            <FilterBar />
            <Comments comments={comments} />
        </div>
    }
}

const mapStateToProps = (state) => ({ lastUpdated: state.lastUpdated, searchText: state.searchText });

export default connect(mapStateToProps)(CommentsContainer);