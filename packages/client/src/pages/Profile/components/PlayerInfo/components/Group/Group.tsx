import './Group.scss';

export interface GroupProps {
  name: string;
  value: string;
}

const Group = ({ name, value }: GroupProps) => {
  return (
    <div className="group">
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
};

export default Group;
