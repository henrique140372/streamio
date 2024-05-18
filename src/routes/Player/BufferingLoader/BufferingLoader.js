// Copyright (C) 2017-2023 Smart code 203358507

const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const { Image } = require('stremio/common');
const styles = require('./styles');

const BufferingLoader = ({ className, logo, onClick }) => {
    return (
        <div className={classnames(className, styles['buffering-loader-container'])} onClick={onClick}>
            <Image
                className={styles['buffering-loader']}
                src={logo}
                alt={' '}
                fallbackSrc={require('/images/stremio_symbol.png')}
            />
        </div>
    );
};

BufferingLoader.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
    onClick: PropTypes.func,
};

module.exports = BufferingLoader;
