const AWS = require('aws-sdk');
const fs = require('fs')

const awsAccessKeyId = process.env.AWS_ACCESSKEY;
const awsSecretAccessKey = process.env.AWS_SECRETKEY;

const awsRegion = process.env.AWS_REGION;

// const s3 = new AWS.S3({
//     accessKeyId:awsAccessKeyId,
//     secretAccessKey:awsSecretAccessKey,
//     region: awsRegion
// });

AWS.config.update({
    accessKeyId: awsAccessKeyId,
    secretAccessKey: awsSecretAccessKey,
    region: awsRegion,
})

const s3 = new AWS.S3();

const getS3FileUrl = async(bucketName, objectKey) => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: bucketName,
            Key: objectKey
        };
    
        s3.getSignedUrl('getObject', params, (err, url) => {
            if (err) {
            reject(err);
            } else {
            resolve(url);
            }
        });
    });
}

const uploadFileToS3 = async(bucketName, fileKey, fileBuffer) => {
    const params = {
        Bucket: bucketName,
        Key: fileKey,
        Body: fileBuffer,
    };

    return new Promise((resolve, reject) => {
        s3.upload(params, (err,data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.Location)
            }
        })
    })
}

module.exports = {
    getS3FileUrl,
    uploadFileToS3
}