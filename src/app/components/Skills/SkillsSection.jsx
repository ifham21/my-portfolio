import DevelopmentSkill from './DevelopmentSkill';
import DesignSkill from './DesignSkill';
import TestingSkill from './TestingSkill';

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      <div className="text-center">
        <h2 className="text-xl font-bold text-cyan-300 mb-4">Development</h2>
        <DevelopmentSkill />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-pink-400 mb-4">Design</h2>
        <DesignSkill />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-red-500 mb-4">Testing</h2>
        <TestingSkill />
      </div>
    </div>
  );
}
