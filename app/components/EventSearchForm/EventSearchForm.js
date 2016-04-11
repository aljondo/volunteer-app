import React, { Component } from 'react';
import { Input, Grid, Row, Col } from 'react-bootstrap'
import styles from './eventsearchform.scss'

const CategoryLocationForm = () => {
    const categories = ['Tutoring', 'Pet stuff', 'Tutoring', 'Construction'];
    const neighborhoods = ['Roxbury', 'Beacon Hill', 'Back Bay', 'South Boston'];
    return(
            <Row>
                <Col md={12} className={styles.search}>
                    <form>
                        <h3>I am looking for</h3>
                        <Input type="select" placeholder="Category">
                          {genCategoryDropdown(categories)}
                        </Input>
                        <h3> in </h3>
                        <Input type="select" placeholder="Neighborhood">
                          {genNeighborhoodDropdown(neighborhoods)}
                        </Input>
                    </form>
                </Col>
            </Row>
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
