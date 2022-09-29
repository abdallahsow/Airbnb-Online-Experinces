const SinglePic = ({ className, src1, src2 }) => {
  return (
    <div className={className}>
      <img src={src1} alt="" />
      <img src={src2} alt="" />
    </div>
  );
};

export default SinglePic;
