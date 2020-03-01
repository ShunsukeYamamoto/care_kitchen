require 'rails_helper'

describe User do
  describe 'create' do
    it 'Userモデル保存' do
      user = create(:user)
      expect(user).to be_valid
    end

  end
end