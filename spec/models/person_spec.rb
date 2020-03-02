require 'rails_helper'

describe Person do
  describe 'create' do
    it 'personモデル保存' do
      person = build(:person)
      expect(person).to be_valid
    end
  end
end