from rest_framework import serializers
from leads.models import Lead

#Lead Serializer
class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = '__all__'

    def validate(self, data):
        errors = {}
        amount = data.get('amount')
        user = self.context['request'].user
        if amount > user.account.currency:
            errors['betAmount'] = "You don't have enough points! Current Points: " + str(user.account.currency)
            raise serializers.ValidationError(errors)
            
            
        return data


