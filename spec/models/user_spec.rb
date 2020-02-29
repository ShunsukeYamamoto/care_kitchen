require 'rails_helper'

describe User do
  describe 'create' do
    it 'ユーザー新規登録' do
      user = User.new(name: "テスト",email: "test@i.softbank.jp",password: "test12",password_confirmation: "test12")
      user.valid?
      expect(user).to be_valid
    end
  end
end