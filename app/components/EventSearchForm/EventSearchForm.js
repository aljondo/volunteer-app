import React, { Component } from 'react';
import { Input, Grid, Row, Col } from 'react-bootstrap'
import Icon from 'react-fa';
import styles from './eventsearchform.scss'

const CategoryLocationForm = (props) => {
    const categories = [
        {key: "first", value: "Category"},
        {key: "youth", value: "Youth"},
        {key: "seniors", value: "Seniors"},
        {key: "education", value: "Education"},
        {key: "environment", value: "Environment/Sustainability"},
        {key: "health", value: "Health"},
        {key: "arts", value: "Arts and Culture"},
        {key: "financialemp", value: "Financial Empowerment"},
        {key: "veterans", value: "Veterans"},
        {key: "immigration", value: "Immigration"},
        {key: "animals", value: "Animals"},
        {key: "mentoring", value: "Mentoring"},
        {key: "homeless", value: "Homeless/Housing"},
        {key: "lgbt", value: "Lesbian, gay, bisexual, transgender"},
        {key: "domestic", value: "Domestic Violence"},
        {key: "hunger", value: "Hunger"},
        {key: "disabilities", value: "People with Disabilities"}
        ];
    const neighborhoods = [
        {key: "first", value: "Neighborhood"},
        {key: "allston", value: "Allston"},
        {key: "backbay", value: "Back Bay"},
        {key: "bayvillage", value: "Bay Village"},
        {key: "beacon", value : "Beacon Hill"},
        {key: "brighton", value : "Brighton"},
        {key: "charlestown", value: "Charlestown"},
        {key: "chinatown", value: "Chinatown/Leather District"},
        {key: "dorchester", value: "Dorchester"},
        {key: "downtown", value: "Downtown"},
        {key: "eastboston", value: "East Boston"},
        {key: "fenwaykenmore", value: "Fenway Kenmore"},
        {key: "hyde", value: "Hyde Park"},
        {key: "jamaica", value: "Jamaica Plain"},
        {key: "mattapan", value: "Mattapan"},
        {key: "misdorchester", value: "Mid Dorchester"},
        {key: "missionshill", value:"Mission Hill"},
        {key: "northend", value: "North End"},
        {key: "roslindale", value: "Roslindale"},
        {key: "roxbury", value: "Roxbury"},
        {key: "southboston", value: "South Boston"},
        {key: "southend", value: "South End"},
        {key: "westend", value: "West End"},
        {key: "westroxbury", value: "West Roxbury"},
        {key: "greater", value: "Greater Boston Area/Outside City"}
        ];
    return(
            <Row className={styles.wrapper}>
                <Col md={10} xs={12} className={styles.formCol}>
                    <Col md={4} xs={5} className={styles.formCol}>
                        <h3 className={styles.formItem}>I want to help with</h3>
                    </Col>
                    <Col md={3} xs={7} className={styles.formCol}>
                        <div className={styles.formItem}>
                            <Input onChange={props.categoryChange} type="select" placeholder="Category">
                              {genCategoryDropdown(categories)}
                            </Input>
                        </div>
                    </Col>
                    <Col md={1} xs={5} className={styles.formCol}>
                        <h3 className={styles.formItem}>in</h3>
                    </Col>
                    <Col md={4} xs={7} className={styles.formCol}>
                        <div className={styles.formItem}>
                            <Input onChange={props.neighborhoodChange} type="select" placeholder="Neighborhood">
                              {genNeighborhoodDropdown(neighborhoods)}
                            </Input>
                        </div>
                    </Col>
                </Col>
                <Col md={2} xs={12} className={styles.goSearchCol}>
                    <div className={styles.goSearch} onClick={props.searchClick}>
                        <Icon name="arrow-right" size={'3x'} className={styles.icon}/>
                    </div>
                </Col>
            </Row>
    )
};

const genCategoryDropdown = (categories) => (
    categories.map((category, index) => (
        <option value={category.key} key={category.key}>{category.value}</option>
    ))
);
const genNeighborhoodDropdown = (neighborhoods) => (
    neighborhoods.map((neighborhood, index) => (
        <option value={neighborhood.key} key={neighborhood.key}>{neighborhood.value}</option>
    ))
);

export default CategoryLocationForm
