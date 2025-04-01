import * as core from '@actions/core';
import OSS from 'ali-oss';

/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
export const createClient = (): OSS => {
  const accessKeyId = core.getInput('access-key-id');
  const accessKeySecret = core.getInput('access-key-secret');
  const bucket = core.getInput('bucket');
  const region = core.getInput('region');

  if (!accessKeyId || !accessKeySecret || !bucket || !region) {
    throw new Error('Missing required input');
  }

  // ali-oss类型定义有问题，这里使用OSS构造函数
  const client = new OSS({
    accessKeyId,
    accessKeySecret,
    bucket,
    region,
  });

  return client;
};
