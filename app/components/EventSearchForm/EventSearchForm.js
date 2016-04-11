import React, { Component } from 'react';
import { Input, Grid, Row, Col } from 'react-bootstrap'
import styles from './eventsearchform.scss'


const CategoryLocationForm = (props) => {
    const categories = ['Tutoring', 'Pet stuff', 'Tutoring', 'Construction'];
    const neighborhoods = ['Roxbury', 'Beacon Hill', 'Back Bay', 'South Boston'];
    return(
        <Grid>
            <Row>
                <Col xs={10} className={styles.bigBox}>
                    <form>
                        <h3>
                            <Col xs={3}>I am looking for</Col>
                            <Col xs={3}>
                                <Input type="select" placeholder="Category" className={styles.dropdown}>
                                    {genCategoryDropdown(categories)}
                                </Input>
                            </Col>
                            <Col xs={1}> in </Col>
                            <Col xs={3}>
                                <Input type="select" placeholder="Neighborhood" className={styles.dropdown}>
                                    {genNeighborhoodDropdown(neighborhoods)}
                                </Input>
                            </Col>
                            <Col xs={2} className={styles.button}>
                                <Button onClick={this.props.searchForEvents}> Go </Button>
                            </Col>
                        </h3>
                    </form>
                </Col>
            </Row>
        </Grid>
    )
};

const genCategoryDropdown = (categories) => (
    categories.map((category, index) => (
        <option value={category} key={index}>{category}</option>
    ))
);
const genNeighborhoodDropdown = (neighborhoods) => (
    neighborhoods.map((neighborhood, index) => (
        <option value={neighborhood} key={index}>{neighborhood} </option>
    ))
);

export default CategoryLocationForm
